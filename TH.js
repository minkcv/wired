var TH = {
    materials : {
        pinkLineMat : null,
        whiteLineMat : null,
        blackBasicMat : null,
        greenBasicMat: null
    },
    threediv : null,
    width : null,
    height : null,
    scene : null,
    camera : null,
    renderer : null,
    texloader : null,
    floorY : -30,
    clock : null,
    animators : [],
    lines: [],

    init : function () {
        TH.threediv = document.getElementById('game'),
        TH.width = TH.threediv.clientWidth;
        TH.height = TH.threediv.clientHeight;
        TH.scene = new THREE.Scene();
        //TH.scene.background = new THREE.Color(0x0c1013);
        TH.camera = new THREE.PerspectiveCamera(45, TH.width / TH.height, 0.1, 4000);
        TH.scene.add(TH.camera);
        TH.camera.rotateY(-3.14 / 2);

        TH.renderer = new THREE.WebGLRenderer({antialias: true});
        TH.renderer.setSize(TH.width, TH.height);
        TH.threediv.appendChild(TH.renderer.domElement);

        TH.texloader = new THREE.TextureLoader();
        TH.clock = new THREE.Clock();

        this.materials.pinkLineMat = new THREE.LineBasicMaterial({color: 0xf442d4});
        this.materials.whiteLineMat = new THREE.LineBasicMaterial({color: 0xf260d8});
        this.materials.blackBasicMat = new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide});
        this.materials.greenBasicMat = new THREE.MeshBasicMaterial({color: 0x00ff00, side: THREE.DoubleSide});
    },
    _loadTextureMaterial : function(name, repeatX, repeatY, transp) {
        var texture = TH._loadTexture(name, repeatX, repeatY);
        return new THREE.MeshBasicMaterial({color: 0xffffff, flatShading: true, overdraw: 0.5, map: texture, side: THREE.DoubleSide, transparent: transp || false});
    },
    _loadSpriteMaterial : function(name, repeatX, repeatY) {
        var tex = TH._loadTexture(name, repeatX, repeatY);
        return new THREE.SpriteMaterial({map: tex, color: 0xffffff});
    },
    _loadTexture : function(name, repeatX, repeatY) {
        var tex = TH.texloader.load('art/' + name);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(repeatX, repeatY);
        tex.magFilter = THREE.NearestFilter;
        tex.minFilter = THREE.NearestFilter;
        return tex;
    },
    run : function(update) {
        requestAnimationFrame( function(){TH.run(update)} );
        update();
        TH.renderer.render( TH.scene, TH.camera );
    },
    addSprite : function(x, y, z, width, height, scale, textureName, tilesX, tilesY, tilesTotal, duration) {
        var tex = TH._loadTexture(textureName, 1, 1);
        if (tilesTotal > 0 && duration > 0) {
            var animator = new TextureAnimator(tex, tilesX, tilesY, tilesTotal, duration);
            TH.animators.push(animator);
        }
        var mat = new THREE.SpriteMaterial({map: tex, color: 0xffffff});
        var sprite = new THREE.Sprite(mat);
        sprite.position.x = x;
        sprite.position.z = z;
        sprite.position.y = y;
        sprite.scale.x = width * 25 * scale;
        sprite.scale.y = height * 25 * scale;
        TH.scene.add(sprite);
        return sprite;
    },
    addAnimatedPlane : function(p1, p2, y, height, textureName, tilesX, tilesY, tilesTotal, duration) {
        var tex = TH._loadTexture(textureName, 1, 1);
        if (tilesTotal > 1) {
            var animator = new TextureAnimator(tex, tilesX, tilesY, tilesTotal, duration);
            TH.animators.push(animator);
        }
        var mat = new THREE.MeshBasicMaterial({color: 0xffffff, flatShading: true, overdraw: 0.5, map: tex, side: THREE.DoubleSide, transparent: true});
        var length = distance(p1, p2);
        var geometry = new THREE.PlaneGeometry(length, height);
        var plane = new THREE.Mesh(geometry, mat);
        var midpoint = {x: p1.x + (p2.x - p1.x) / 2, y: p1.y + (p2.y - p1.y) / 2};
        plane.position.x = midpoint.x;
        plane.position.z = midpoint.y;
        var angle = -Math.atan((p2.y - p1.y) / (p2.x - p1.x));
        plane.rotateY(angle);
        plane.position.y = y;
        TH.scene.add(plane);
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
    addAnimatedFloor : function (x, y, z, width, height, textureName, tilesX, tilesY, tilesTotal, duration) {
        var tex = TH._loadTexture(textureName, 1, 1);
        if (tilesTotal > 1) {
            var animator = new TextureAnimator(tex, tilesX, tilesY, tilesTotal, duration);
            TH.animators.push(animator);
        }
        var mat = new THREE.MeshBasicMaterial({color: 0xffffff, flatShading: true, overdraw: 0.5, map: tex, side: THREE.DoubleSide, transparent: true});
        var geometry = new THREE.PlaneGeometry(width, height);
        var plane = new THREE.Mesh(geometry, mat);
        var floor = new THREE.Mesh( geometry, mat);
        floor.position.set(x, y, z);
        floor.rotation.x = -Math.PI / 2;
        TH.scene.add(floor);
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
    // points must be a single closed figure
    addFloorFromPoints : function(x, y, z, points, textureName, transparent) {
        var thPoints = [];
        var startKey = Object.keys(points)[0];
        var current = points[startKey];
        thPoints.push(new THREE.Vector2(current.x + x, current.y + z));
        while (true) {
            if (current.next >= 0 && current.next != startKey) {
                current = points[current.next];
                thPoints.push(new THREE.Vector2(current.x + x, current.y + z));
            }
            else {
                break;
            }
        }
        var shape = new THREE.Shape(thPoints);
        var geometry = new THREE.ShapeGeometry(shape);
        var mat = TH._loadTextureMaterial(textureName, 0.008, 0.008, transparent);
        var floor = new THREE.Mesh(geometry, mat);
        floor.position.y = y;
        floor.rotation.x = Math.PI / 2;
        TH.scene.add(floor);
    },
    // A one off function for adding the space texture at the end
    addCylinder : function(x, y, z, radius, height, textureName) {
        var geom = new THREE.CylinderGeometry(radius, radius, height, 64, 1, true, 0, Math.PI);
        var texture = TH._loadTexture(textureName, -1, 1); // -1 reverses the x direction of the texture
        var mat = new THREE.MeshBasicMaterial({color: 0xffffff, flatShading: true, overdraw: 0.5, map: texture, side: THREE.BackSide, transparent: false});
        var cylinder = new THREE.Mesh(geom, mat);
        cylinder.rotation.y = -Math.PI / 2;
        cylinder.position.x = x;
        cylinder.position.y = y;
        cylinder.position.z = z;
        TH.scene.add(cylinder);
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
        var delta = TH.clock.getDelta(); 
        for (var i in TH.animators) {
            TH.animators[i].update(delta * 1000);
        }
    },
    clearScene : function() {
        while (TH.scene.children.length)
            TH.scene.remove(TH.scene.children[0]);
    }
}

