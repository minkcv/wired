var TH = {
    materials : {
        pinkLineMat : null,
        whiteLineMat : null,
        blackBasicMat : null,
        greenBasicMat : null,
        none : null
    },
    threediv : null,
    width : null,
    height : null,
    scene : null,
    camera : null,
    raycaster: null,
    mouseVec : null,
    renderer : null,
    floorY : -30,
    clock : null,
    animators : [],
    lines: [],
    levelTriggers: [],
    fadeOut : false,
    fadeOutDone : null,
    fadeIn : false,
    fadeSpeed : 0.02,
    delta : 0,
    originalRGB: {r: 0, g: 0, b: 0},

    init : function () {
        TH.threediv = document.getElementById('game'),
        TH.width = TH.threediv.clientWidth;
        TH.height = TH.threediv.clientHeight;
        TH.scene = new THREE.Scene();
        //TH.scene.background = new THREE.Color(0x0c1013);
        TH.camera = new THREE.PerspectiveCamera(45, TH.width / TH.height, 0.1, 8000);
        TH.scene.add(TH.camera);
        TH.camera.rotateY(-3.14 / 2);

        TH.renderer = new THREE.WebGLRenderer({antialias: true});
        TH.renderer.setSize(TH.width, TH.height);
        TH.threediv.appendChild(TH.renderer.domElement);

        TH.raycaster = new THREE.Raycaster();
        TH.mouseVec = new THREE.Vector2();

        TH.clock = new THREE.Clock();

        this.materials.pinkLineMat = new THREE.LineBasicMaterial({color: 0xf442d4});
        this.originalRGB.r = this.materials.pinkLineMat.color.r;
        this.originalRGB.g = this.materials.pinkLineMat.color.g;
        this.originalRGB.b = this.materials.pinkLineMat.color.b;
        // Start black to fade in.
        this.materials.pinkLineMat.color.r = 0;
        this.materials.pinkLineMat.color.g = 0;
        this.materials.pinkLineMat.color.b = 0;
        this.materials.whiteLineMat = new THREE.LineBasicMaterial({color: 0xf260d8});
        this.materials.blackBasicMat = new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide});
        this.materials.greenBasicMat = new THREE.MeshBasicMaterial({color: 0x00ff00, side: THREE.DoubleSide});
        this.materials.none = new THREE.MeshBasicMaterial({color: 0x000000, transparent: true, opacity: 0});
    },
    run : function(update) {
        requestAnimationFrame( function(){TH.run(update)} );
        this.delta = this.clock.getDelta();
        update();
        TH.renderer.render( TH.scene, TH.camera );
    },
    resize : function(width, height) {
        TH.renderer.setSize(width, height);
        TH.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 4000);
    },
    addWall : function(p1, p2, height, y) {
        var length = distance(p1, p2);
        var geometry = new THREE.PlaneBufferGeometry(length, height, 32);
        var mat = this.materials.blackBasicMat;
        var plane = new THREE.Mesh(geometry, mat);
        var midpoint = {x: p1.x + (p2.x - p1.x) / 2, y: p1.y + (p2.y - p1.y) / 2};
        plane.position.x = midpoint.x;
        plane.position.z = midpoint.y;
        var angle = -Math.atan((p2.y - p1.y) / (p2.x - p1.x));
        plane.rotateY(angle);
        plane.position.y = y;
        TH.scene.add(plane);
    },
    addFloor : function (p1, p2, y) {
        var width = p2.x - p1.x;
        var depth = p2.y - p1.y;
        var mat = this.materials.blackBasicMat;
        var geometry = new THREE.PlaneBufferGeometry(width, depth);
        var floor = new THREE.Mesh( geometry, mat);
        floor.position.set(p1.x + width / 2, y, p1.y + depth / 2);
        floor.rotation.x = -Math.PI / 2;
        TH.scene.add(floor);
    },
    addModel : function(x, y, z, model, yRotation, scale) {
        var mat = this.materials.pinkLineMat;
        this.lines = [];
        var geometries = [];
        model.forEach((point) => {
            point.conn.forEach((otherId) => {
                var other = null;
                model.forEach((candidate) => {
                    if (candidate.id == otherId)
                        other = candidate;
                });
                if (other != null) {
                    var pos1 = new THREE.Vector3(point.pos.x, point.pos.y, point.pos.z);
                    var pos2 = new THREE.Vector3(other.pos.x, other.pos.y, other.pos.z);
                    var pt1 = {pointId: point.id, position: pos1};
                    var pt2 = {pointId: other.id, position: pos2};
                    var lineGeom = this.createLine(pt1, pt2, scale);
                    if (lineGeom)
                        geometries.push(lineGeom);
                }
            });
        });
        var mergedGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries(geometries);
        var model = new THREE.LineSegments(mergedGeometry, mat);
        model.position.set(x, y, z);
        model.rotateY(yRotation);
        this.scene.add(model);
        return model;
    },
    addMovingModel : function(pt1, pt2, model, yRotation, speed, loop, scale) {
        var addedModel = this.addModel(pt1.x, pt1.y, pt1.z, model, yRotation, scale);
        var animator = {model: addedModel, pt1: pt1, pt2: pt2, speed: speed, loop: loop};
        this.animators.push(animator);
    },
    addSpinningModel : function(x, y, z, model, speed, scale) {
        var addedModel = this.addModel(x, y, z, model, 0, scale);
        var animator = {model: addedModel, speed: speed};
        this.animators.push(animator);
    },
    addLevelTrigger : function(x, y, z, destination) {
        var geom = new THREE.BoxGeometry(5, 5, 5);
        var mat = this.materials.none;
        if (debug)
            mat = this.materials.greenBasicMat;
        var cube = new THREE.Mesh(geom, mat);
        cube.destination = destination;
        cube.position.set(x, y, z);
        this.scene.add(cube);
        this.levelTriggers.push(cube);
    },
    createLine : function(pt1, pt2, scale) {
        var scale = scale || 0.1;
        pt1.position.multiplyScalar(scale);
        pt2.position.multiplyScalar(scale);
        var exists = false;
        this.lines.forEach((existing) => {
            if ((existing.id1 == pt1.pointId && existing.id2 == pt2.pointId) ||
                (existing.id1 == pt2.pointId && existing.id2 == pt1.pointId)) {
                    exists = true;
            }
        });
        if (exists)
            return null;
        var geom = new THREE.BufferGeometry();
        var vertices = new Float32Array([
            pt1.position.x, pt1.position.y, pt1.position.z,
            pt2.position.x, pt2.position.y, pt2.position.z
        ]);
        geom.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        var lineData = {
            id1: pt1.pointId,
            id2: pt2.pointId,
        };
        this.lines.push(lineData);
        return geom;
    },
    update : function() {
        if (this.fadeOut) {
            if (this.materials.pinkLineMat.color.r > 0)
                this.materials.pinkLineMat.color.r -= this.fadeSpeed;
            if (this.materials.pinkLineMat.color.g > 0)
                this.materials.pinkLineMat.color.g -= this.fadeSpeed;
            if (this.materials.pinkLineMat.color.b > 0)
                this.materials.pinkLineMat.color.b -= this.fadeSpeed;

            if (this.materials.pinkLineMat.color.r < this.fadeSpeed &&
                this.materials.pinkLineMat.color.g < this.fadeSpeed &&
                this.materials.pinkLineMat.color.b < this.fadeSpeed) {
                    this.fadeOut = false;
                    TH.clearScene();
                    MA.clearWorld();
                    this.fadeOutDone();
                    this.fadeIn = true;
            }
        }
        else if (this.fadeIn) {
            if (this.materials.pinkLineMat.color.r < this.originalRGB.r)
                this.materials.pinkLineMat.color.r += this.fadeSpeed;
            if (this.materials.pinkLineMat.color.g < this.originalRGB.g)
                this.materials.pinkLineMat.color.g += this.fadeSpeed;
            if (this.materials.pinkLineMat.color.b < this.originalRGB.b)
                this.materials.pinkLineMat.color.b += this.fadeSpeed;

            if (this.materials.pinkLineMat.color.r > this.originalRGB.r &&
                this.materials.pinkLineMat.color.r > this.originalRGB.g &&
                this.materials.pinkLineMat.color.r > this.originalRGB.b) {
                    this.fadeIn = false;
            }
        }
        if (mouseDown) {
            this.raycaster.setFromCamera(TH.mouseVec, TH.camera);
            var intersects = this.raycaster.intersectObjects(this.scene.children);
            for (let index = 0; index < intersects.length; index++) {
                var element = intersects[index];
                if (element.object.destination && element.distance < 100) {
                    changeLevel(element.object.destination);
                }
            }
        }

        for (var i in TH.animators) {
            var animator = TH.animators[i];
            if (animator.pt1 && animator.pt2) {
                // Moving animator
                var dx = animator.pt2.x - animator.pt1.x;
                var dy = animator.pt2.y - animator.pt1.y;
                var dz = animator.pt2.z - animator.pt1.z;
                dx *= this.delta * animator.speed;
                dy *= this.delta * animator.speed;
                dz *= this.delta * animator.speed;
                if (Math.sign(dx) * (animator.model.position.x - animator.pt1.x) >= Math.sign(dx) * (animator.pt2.x - animator.pt1.x) &&
                    Math.sign(dy) * (animator.model.position.y - animator.pt1.y) >= Math.sign(dy) * (animator.pt2.y - animator.pt1.y) &&
                    Math.sign(dz) * (animator.model.position.z - animator.pt1.z) >= Math.sign(dz) * (animator.pt2.z - animator.pt1.z) && animator.loop) {
                    animator.model.position.set(animator.pt1.x, animator.pt1.y, animator.pt1.z);
                }
                else {
                    var translate = new THREE.Vector3(dx, dy, dz);
                    animator.model.position.add(translate);
                }
            }
            else {
                // Spinning animator
                animator.model.rotation.y += animator.speed;
            }
        }
    },
    clearScene : function() {
        while (TH.scene.children.length)
            TH.scene.remove(TH.scene.children[0]);
    }
}

