function createPlayer(x, z, angle) {
    MA.createPlayer(x, z, angle);
    TH.camera.position.set(MA.player.position.x, 0, MA.player.position.y);
    TH.camera.rotation.y = -MA.player.angle + (3 * Math.PI / 2);
}

function addWall(x, z, width, height, depth) {
    TH.addWall(x, z, width, height, depth);
    MA.addBox(x, z, width, depth);
}

function addSprite(x, y, z, width, height, scale, textureName, tilesX, tilesY, tilesTotal, duration, body, creature) {
    var sprite = TH.addSprite(x, y, z, width, height, scale, textureName, tilesX, tilesY, tilesTotal, duration);
    if (creature)
        MA.addCircle(x, z, 10, sprite);
    else if (body)
        MA.addCircle(x, z, width * 8);
}

function addObject(x, y, z, radius, model, rotation, scale) {
    TH.addModel(x, y, z, model, rotation, scale);
    if (radius)
        MA.addCircle(x, z, radius);
}

function addSpinningObject(x, y, z, model, speed, scale, radius) {
    TH.addSpinningModel(x, y, z, model, speed, scale);
    if (radius)
        MA.addCircle(x, z, radius);
}

function addWallShape(x, y, z, width, height, points, textureNames, addBodies, transparent) {
    for (key in points) {
        var point = points[key];
        if (point.next < 0)
            continue;
        var next = points[points[key].next];
        var p1 = {x: point.x + x, y: point.y + z};
        var p2 = {x: next.x + x, y: next.y + z};
        var textureName = textureNames[Math.floor(Math.random() * textureNames.length)];
        TH.addWallPlane(p1, p2, width, height, textureName, y, transparent);
        if (addBodies)
            MA.addWall(p1, p2);
    }
}
function addAnimatedWall(p1, p2, y, height, textureName, tilesX, tilesY, totalTiles, delay, addBody) {
    if (addBody)
        MA.addWall(p1, p2);
    TH.addAnimatedPlane(p1, p2, y, height, textureName, tilesX, tilesY, totalTiles, delay);
}

function rotatePlayer(angle) {
    MA.rotatePlayer(-angle);
    TH.camera.rotation.y = -MA.player.angle + (3 * Math.PI / 2);
}

function moveForward(moveSpeed) {
    var xv = Math.cos(MA.player.angle) * moveSpeed;
    var yv = Math.sin(MA.player.angle) * moveSpeed;
    Matter.Body.applyForce(MA.player, MA.player.position, {x: xv, y: yv});
    TH.camera.position.set(MA.player.position.x, 0, MA.player.position.y);
}
function moveLeft(moveSpeed) {
    var xv = Math.cos(MA.player.angle - Math.PI / 2) * moveSpeed;
    var yv = Math.sin(MA.player.angle - Math.PI / 2) * moveSpeed;
    Matter.Body.applyForce(MA.player, MA.player.position, {x: xv, y: yv});
    TH.camera.position.set(MA.player.position.x, 0, MA.player.position.y);
}
function moveRight(moveSpeed) {
    var xv = Math.cos(MA.player.angle + Math.PI / 2) * moveSpeed;
    var yv = Math.sin(MA.player.angle + Math.PI / 2) * moveSpeed;
    Matter.Body.applyForce(MA.player, MA.player.position, {x: xv, y: yv});
    TH.camera.position.set(MA.player.position.x, 0, MA.player.position.y);
}

function moveBackward(moveSpeed) {
    var xv = -Math.cos(MA.player.angle) * moveSpeed;
    var yv = -Math.sin(MA.player.angle) * moveSpeed;
    Matter.Body.applyForce(MA.player, MA.player.position, {x: xv, y: yv});
    TH.camera.position.set(MA.player.position.x, 0, MA.player.position.y);
}

function update() {
    stats.begin();
    var moveSpeed = 1;
    if (debug && keys.shift in keysDown)
        moveSpeed = 8;

    /*
    if (keys.left in keysDown)
        rotatePlayer(0.03);
    else if (keys.right in keysDown)
        rotatePlayer(-0.03);
    */

    var rotation = -(mouseX - threed.clientWidth / 2) / threed.clientWidth / 20;

    // Deadzone in the middle.
    if (rotation > -0.003 && rotation < 0.003)
        rotation = 0;
    rotatePlayer(rotation);

    if (keys.w in keysDown || keys.up in keysDown)
        moveForward(moveSpeed);
    else if (keys.s in keysDown || keys.down in keysDown)
        moveBackward(moveSpeed);

    if (keys.a in keysDown || keys.left in keysDown)
        moveLeft(moveSpeed);
    else if (keys.d in keysDown || keys.right in keysDown)
        moveRight(moveSpeed);

    if (debug) {
        MA.updateView();
        updateDebug();
    }

    TH.update();
    stats.end();
}

function init() {
    MA.init();
    TH.init();
    //loadLevel1();
    //TH.clearScene();
    //MA.clearWorld();
    //loadLevel2();
    loadLevel3();
    //loadLevel4();
    //loadLevel5();
    //loadLevel6();
}
init();

MA.run();
TH.run(update);
