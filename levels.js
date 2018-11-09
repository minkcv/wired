function loadLevel1() {
    createPlayer(0, -400, Math.PI / 2);
    addObject(0, TH.floorY, 0, 0, models.intersection, 0);
    for (let index = 1; index < 10; index++) {
        addObject(0, -30, index * 100 + 10, 0, models.tunnel, 0);
    }
    for (let index = 1; index < 10; index++) {
        addObject(100 * index + 10, -30, 0, 0, models.tunnel, Math.PI / 2);
    }
    for (let index = 1; index < 10; index++) {
        addObject(0, -30, -index * 100 - 10, 0, models.tunnel, 0);
    }
    for (let index = 1; index < 10; index++) {
        addObject(-index * 100 - 10, -30, 0, 0, models.tunnel, Math.PI / 2);
    }
    MA.addWall({x: 60, y: 60}, {x: 60, y: 1000});
    MA.addWall({x: -60, y: 60}, {x: -60, y: 1000});
    MA.addWall({x: 60, y: 1000}, {x: -60, y: 1000});

    TH.addWall({x: 61, y: 61}, {x: 61, y: 1001}, 100, 0);
    TH.addWall({x: -61, y: 61}, {x: -61, y: 1001}, 100, 0);
    
    MA.addWall({x: 60, y: -60}, {x: 60, y: -1000});
    MA.addWall({x: -60, y: -60}, {x: -60, y: -1000});
    MA.addWall({x: 60, y: -1000}, {x: -60, y: -1000});
    
    TH.addWall({x: 61, y: -61}, {x: 61, y: -1001}, 100, 0);
    TH.addWall({x: -61, y: -61}, {x: -61, y: -1001}, 100, 0);

    MA.addWall({x: -60, y: 60}, {x: -1000, y: 60});
    MA.addWall({x: -60, y: -60}, {x: -1000, y: -60});
    MA.addWall({x: -1000, y: 60}, {x: -1000, y: -60});

    MA.addWall({x: 60, y: 60}, {x: 1000, y: 60});
    MA.addWall({x: 60, y: -60}, {x: 1000, y: -60});
    MA.addWall({x: 1000, y: 60}, {x: 1000, y: -60});

    addObject(45, TH.floorY, 45, 10, models.sign, -3 * Math.PI / 4, 0.07);
    addObject(910, TH.floorY, 0, 10, models.sign, -Math.PI / 2, 0.07);
    addLevelTrigger(45, -9, 45, loadLevel3);
}

function loadLevel2() {
    createPlayer(0, -200, Math.PI / 2);
    for (var index = -3; index < 3; index++) {
        addObject(0, TH.floorY, index * 100 + 10, 0, models.tunnel, 0);
    }
    addObject(0, TH.floorY, index * 100 + 10, 0, models.tunnelWindow, 0);
    for (index = 4; index < 8; index++) {
        addObject(0, TH.floorY, index * 100 + 10, 0, models.tunnel, 0);
    }
    addObject(0, TH.floorY, -340, 0, models.doorLocked, 0);
    addObject(0, TH.floorY, 760, 0, models.doorLocked, Math.PI);

    MA.addWall({x: 60, y: -340}, {x: 60, y: 760});
    MA.addWall({x: -60, y: -340}, {x: -60, y: 760});

    MA.addWall({x: 60, y: -340}, {x: -60, y: -340});
    MA.addWall({x: 60, y: 760}, {x: -60, y: 760});

    TH.addWall({x: -61, y: -350}, {x: -61, y: 770}, 100, 0);
    TH.addWall({x: 61, y: -350}, {x: 61, y: 260}, 100, 0);
    TH.addWall({x: 61, y: 360}, {x: 61, y: 770}, 100, 0);

    TH.addWall({x: 61, y: 260}, {x: 61, y: 360}, 50, -45);
    TH.addWall({x: 61, y: 260}, {x: 61, y: 360}, 50, 45);

    TH.addWall({x: 61, y: -350}, {x: -61, y: -350}, 100, 0);
    TH.addWall({x: 61, y: 770}, {x: -61, y: 770}, 100, 0);

    TH.addFloor({x: -61, y: -340}, {x: 61, y: 760}, 31);
    TH.addFloor({x: -61, y: -340}, {x: 61, y: 760}, -31);

    for (var index = -100; index < 100; index++) {
        addObject(840, -700, index * 100 + 10, 0, models.simpleTunnel, 0);
        addObject(800, 60, index * 100 + 10, 0, models.simpleTunnel, 0);
        addObject(860, -300, index * 100 + 10, 0, models.simpleTunnel, 0);

        addObject(1040, -600, index * 100 + 10, 0, models.simpleTunnel, 0);
        addObject(1400, 160, index * 100 + 10, 0, models.simpleTunnel, 0);
        addObject(1860, -200, index * 100 + 10, 0, models.simpleTunnel, 0);

        addObject(2240, -500, index * 100 + 10, 0, models.simpleTunnel, 0);
        addObject(2600, 260, index * 100 + 10, 0, models.simpleTunnel, 0);
        addObject(3060, -400, index * 100 + 10, 0, models.simpleTunnel, 0);

        addObject(index * 100, 200, -800, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, -200, -400, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, -500, -100, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, -160, 400, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, 300, 800, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, 160, 1200, 0, models.simpleTunnel, Math.PI / 2);

        addObject(index * 100, 200, -1800, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, -200, -1400, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, -500, -1100, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, -160, 1400, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, 300, 1800, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, 160, 2200, 0, models.simpleTunnel, Math.PI / 2);

        addObject(400, index * 100, 1200, 0, models.shaft, Math.PI / 2);
        addObject(1400, index * 100, 200, 0, models.shaft, Math.PI / 2);
        addObject(600, index * 100, 600, 0, models.shaft, Math.PI / 2);
        addObject(600, index * 100, -100, 0, models.shaft, Math.PI / 2);

        addObject(2400, index * 100, 1200, 0, models.shaft, Math.PI / 2);
        addObject(1400, index * 100, 2200, 0, models.shaft, Math.PI / 2);
        addObject(3600, index * 100, 3600, 0, models.shaft, Math.PI / 2);
        addObject(1600, index * 100, -100, 0, models.shaft, Math.PI / 2);
        addObject(3600, index * 100, -3600, 0, models.shaft, Math.PI / 2);
        addObject(1600, index * 100, -1100, 0, models.shaft, Math.PI / 2);
        addObject(400, index * 100, -600, 0, models.shaft, Math.PI / 2);
    }

    TH.addMovingModel({x: -7000, y: 300, z: 380}, {x: 9000, y: 300, z: 380}, models.ship, Math.PI, 0.3, true, 0.3);
    TH.addMovingModel({x: 8000, y: -300, z: -380}, {x: -8000, y: -300, z: -380}, models.ship, 0, 0.3, true, 0.3);
    TH.addMovingModel({x: 300, y: 30, z: -8380}, {x: 300, y: 30, z: 8380}, models.ship, Math.PI / 2, 0.3, true, 0.3);
    TH.addMovingModel({x: 400, y: -30, z: 8000}, {x: 400, y: -30, z: -8000}, models.ship, -Math.PI / 2, 0.3, true, 0.3);

    TH.addMovingModel({x: -9000, y: 600, z: 180}, {x: 7000, y: 600, z: 180}, models.ship, Math.PI, 0.3, true, 0.3);
    TH.addMovingModel({x: 6000, y: -600, z: -1380}, {x: -6000, y: -600, z: -1380}, models.ship, 0, 0.3, true, 0.3);
    TH.addMovingModel({x: 600, y: 100, z: -7380}, {x: 600, y: 100, z: 7380}, models.ship, Math.PI / 2, 0.3, true, 0.3);
    TH.addMovingModel({x: 800, y: -100, z: 9000}, {x: 800, y: -100, z: -7000}, models.ship, -Math.PI / 2, 0.3, true, 0.3);
}

function loadLevel3() {
    createPlayer(-30, 0, 0);

    addObject(200, TH.floorY, 80, 10, models.bench, Math.PI / 2, 0.08);
    addObject(200, TH.floorY, -80, 10, models.bench, -Math.PI / 2, 0.08);
    addObject(180 * 2.8, TH.floorY, 80, 10, models.fountain, 1.1, 0.08);
    addObject(180 * 2.8, TH.floorY, -80, 10, models.fountain, 1.9, 0.08);
    
    addObject(180 * 2, TH.floorY, -80, 10, models.tree, 1.9, 0.08);
    addObject(180 * 2, TH.floorY, 80, 10, models.tree, 1.9, 0.08);

    addObject(0, TH.floorY, 0, 0, models.path, Math.PI / 2);
    for (var index = 0; index < 2; index++) {
        addObject(100 * index, TH.floorY, 0, 0, models.path, Math.PI / 2);
    }
    addObject(100 * index, TH.floorY, 0, 0, models.teePath, Math.PI / 2);
    for (var index = 3; index < 5; index++) {
        addObject(100 * index, TH.floorY, 0, 0, models.path, Math.PI / 2);
    }
    addObject(100 * index, TH.floorY, 0, 0, models.coveredPath, Math.PI / 2);
    for (var index = 6; index < 8; index++) {
        addObject(100 * index, TH.floorY, 0, 0, models.path, Math.PI / 2);
    }

    for (var index = 0; index < 8; index++) {
        addObject(100 * index, TH.floorY, 170, 0, models.grass, Math.PI / 2);
        addObject(100 * index, TH.floorY, -170, 0, models.grass, Math.PI / 2);
        if (index == 2 || index == 5) continue;
        addObject(100 * index, TH.floorY, -80, 0, models.grass, Math.PI / 2);
        addObject(100 * index, TH.floorY, 80, 0, models.grass, Math.PI / 2);
    }

    MA.addWall({x: -50, y: -30}, {x: -50, y: 30}); // Back wall
    MA.addWall({x: 750, y: -30}, {x: 750, y: 30}); // End wall
    MA.addWall({x: -50, y: -30}, {x: 180, y: -30}); // Left wall 1
    MA.addWall({x: 180, y: -60}, {x: 180, y: -30}); // Left wall 2
    MA.addWall({x: 180, y: -60}, {x: 230, y: -60}); // Left wall 3
    MA.addWall({x: 230, y: -60}, {x: 230, y: -30}); // Left wall 4
    MA.addWall({x: 230, y: -30}, {x: 750, y: -30}); // Left wall 5

    MA.addWall({x: -50, y: 30}, {x: 180, y: 30}); // Right wall 1
    MA.addWall({x: 180, y: 60}, {x: 180, y: 30}); // Right wall 2
    MA.addWall({x: 180, y: 60}, {x: 230, y: 60}); // Right wall 3
    MA.addWall({x: 230, y: 60}, {x: 230, y: 30}); // Right wall 4
    MA.addWall({x: 230, y: 30}, {x: 750, y: 30}); // Right wall 5

    addSpinningObject(720, -30, 0, models.flower, 0.01, 0.08, 10, 'y', 0);
    addLevelTrigger(720, -8, 0, loadLevel4);

    addObject(820, -45, -60, 10, models.angel, -Math.PI / 2);
    addObject(820, -45, 60, 10, models.angel, -Math.PI / 2);
}

function loadLevel4() {
    createPlayer(0, 0, 0);
    addObject(0, TH.floorY, 0, 0, models.path, Math.PI / 2);
    addObject(100, TH.floorY, 0, 0, models.path, Math.PI / 2);
    addObject(200, TH.floorY, 0, 0, models.leftPath, -Math.PI / 2);
    addObject(200, TH.floorY, -100, 0, models.path, 0);
    addObject(200, TH.floorY, -200, 0, models.path, 0);
    addObject(200, TH.floorY, -300, 0, models.leftPath, Math.PI / 2);
    addObject(300, TH.floorY, -300, 0, models.path, Math.PI / 2);
    addObject(400, TH.floorY, -300, 0, models.path, Math.PI / 2);
    MA.addWall({x: -50, y: -30}, {x: -50, y: 30}); // Back wall
    MA.addWall({x: -50, y: -30}, {x: 170, y: -30});
    MA.addWall({x: -50, y: 30}, {x: 230, y: 30});
    MA.addWall({x: 230, y: 30}, {x: 230, y: -270});
    MA.addWall({x: 170, y: -30}, {x: 170, y: -330});
    MA.addWall({x: 170, y: -330}, {x: 450, y: -330});
    MA.addWall({x: 230, y: -270}, {x: 450, y: -270});

    // Left side of path
    addObject(30, TH.floorY, -80, 0, models.grass, 0);
    addObject(120, TH.floorY, -80, 0, models.grass, 0);
    addObject(30, TH.floorY, -180, 0, models.grass, 0);
    addObject(120, TH.floorY, -180, 0, models.grass, 0);
    addObject(30, TH.floorY, -280, 0, models.grass, 0);
    addObject(120, TH.floorY, -280, 0, models.grass, 0);
    addObject(30, TH.floorY, -380, 0, models.grass, 0);
    addObject(120, TH.floorY, -380, 0, models.grass, 0);
    addObject(210, TH.floorY, -380, 0, models.grass, 0);
    addObject(300, TH.floorY, -380, 0, models.grass, 0);
    addObject(390, TH.floorY, -380, 0, models.grass, 0);

    // Right side of path
    addObject(30, TH.floorY, 80, 0, models.grass, 0);
    addObject(120, TH.floorY, 80, 0, models.grass, 0);
    addObject(210, TH.floorY, 80, 0, models.grass, 0);
    addObject(300, TH.floorY, 80, 0, models.grass, 0);
    addObject(280, TH.floorY, -10, 0, models.grass, 0);
    addObject(280, TH.floorY, -100, 0, models.grass, 0);
    addObject(280, TH.floorY, -190, 0, models.grass, 0);
    addObject(370, TH.floorY, -10, 0, models.grass, 0);
    addObject(370, TH.floorY, 80, 0, models.grass, 0);
    addObject(370, TH.floorY, -100, 0, models.grass, 0);
    addObject(370, TH.floorY, -190, 0, models.grass, 0);
    addObject(280, TH.floorY, -220, 0, models.grass, 0);
    addObject(340, TH.floorY, -220, 0, models.grass, 0);
    addObject(390, TH.floorY, -220, 0, models.grass, 0);

    // Right side of path
    addObject(300, TH.floorY, -180, 10, models.totem, 0, 0.06);
    addObject(300, TH.floorY, -80, 10, models.totem, 0, 0.06);

    // Left side of path
    addObject(100, TH.floorY, -80, 10, models.totem, 0, 0.06);
    addObject(100, TH.floorY, -180, 10, models.totem, 0, 0.06);
    addObject(300, TH.floorY, -360, 10, models.totem, 0, 0.06);
    addObject(100, TH.floorY, -360, 10, models.totem, 0, 0.06);

    for (let index = 0; index < 4; index++) {
        addObject(500 + index * 100, TH.floorY, -300, 0, models.simpleTunnel, Math.PI / 2);
        addTunnel(500 + index * 100, 0, -300, 0);
    }

    addObject(445, TH.floorY, -300, 0, models.tunnelEntrance, Math.PI / 2);
    MA.addWall({x: 450, y: -360}, {x: 850, y: -360});
    MA.addWall({x: 450, y: -240}, {x: 850, y: -240});
    MA.addWall({x: 450, y: -330}, {x: 450, y: -360});
    MA.addWall({x: 450, y: -240}, {x: 450, y: -270});
    MA.addWall({x: 850, y: -240}, {x: 850, y: -360}); // End of tunnel

    addObject(840, TH.floorY, -300, 10, models.sign, -Math.PI / 2, 0.07);
    addLevelTrigger(840, -9, -300, loadLevel5);
}

function loadLevel5() {
    createPlayer(0, 0, 0);
    for (let index = 0; index < 5; index++) {
        addObject(index * 100, TH.floorY, 0, 0, models.simpleTunnel, Math.PI / 2);
        addTunnel(index * 100, 0, 0, 0);
    }
    MA.addWall({x: -50, y: -60}, {x: 450, y: -60}); // Left wall near
    MA.addWall({x: -50, y: 60}, {x: 450, y: 60}); // Right wall near
    MA.addWall({x: -50, y: -60}, {x: -50, y: 60}); // Back wall

    MA.addWall({x: 750, y: -60}, {x: 1250, y: -60}); // Left wall far
    MA.addWall({x: 750, y: 60}, {x: 1250, y: 60}); // Right wall far
    MA.addWall({x: 1250, y: -60}, {x: 1250, y: 60}); // Far wall

    // Tunnel Narrowing
    MA.addWall({x: 450, y: -60}, {x: 450, y: -50});
    MA.addWall({x: 450, y: 60}, {x: 450, y: 50});
    MA.addWall({x: 750, y: -60}, {x: 750, y: -50});
    MA.addWall({x: 750, y: 60}, {x: 750, y: 50});

    // Side tunnel Narrowing
    MA.addWall({x: 550, y: -150}, {x: 540, y: -150});
    MA.addWall({x: 550, y: 150}, {x: 540, y: 150});
    MA.addWall({x: 650, y: -150}, {x: 660, y: -150});
    MA.addWall({x: 650, y: 150}, {x: 660, y: 150});

    // Side tunnels
    MA.addWall({x: 660, y: 150}, {x: 660, y: 650});
    MA.addWall({x: 660, y: -150}, {x: 660, y: -650});
    MA.addWall({x: 540, y: 150}, {x: 540, y: 650});
    MA.addWall({x: 540, y: -150}, {x: 540, y: -650});

    // Side tunnel ends
    MA.addWall({x: 540, y: -650}, {x: 660, y: -650});
    MA.addWall({x: 540, y: 650}, {x: 660, y: 650});

    addObject(600, TH.floorY, 0, 0, models.rotunda, 0);
    var rotundaFloor = [{x:50,y:-0.1,z:100},{x:50,y:0,z:100},{x:-50,y:0,z:100},{x:-100,y:0,z:50},{x:100,y:0,z:50},{x:100,y:0,z:-50},{x:-100,y:0,z:-50},{x:50,y:0,z:-100},{x:-50,y:0,z:-100},{x:-100,y:0,z:50},{x:-100,y:0,z:-50}];
    TH.addShape(600, TH.floorY - 0.1, 0, rotundaFloor, 0);

    var floorRect = [{x: -50, y: 0, z: -50}, {x: -50, y: 0, z: 50}, {x: 50, y: 0, z: 50}, {x: 50, y: 0, z: -50}];
    TH.addShape(500, TH.floorY - 0.1, 0, floorRect, 0);
    TH.addShape(700, TH.floorY - 0.1, 0, floorRect, 0);
    TH.addShape(600, TH.floorY - 0.1, -100, floorRect, Math.PI / 2);
    TH.addShape(600, TH.floorY - 0.1, 100, floorRect, Math.PI / 2);

    var wallRect1 = [{x: 0, y: -70, z: -40}, {x: 0, y: 70, z: -40}, {x: 0, y: 70, z: 40}, {x: 0, y: -70, z: 40}];
    TH.addShape(528, -100, 77, wallRect1, Math.PI / 4);
    TH.addShape(528, -100, -77, wallRect1, -Math.PI / 4);
    TH.addShape(673, -100, -77, wallRect1, Math.PI / 4);
    TH.addShape(673, -100, 77, wallRect1, -Math.PI / 4);

    var wallRect2 = [{x: -25, y: -70, z: 0}, {x: -25, y: 70, z: 0}, {x: 25, y: 70, z: 0}, {x: 25, y: -70, z: 0}];
    TH.addShape(550.1, -100, 125, wallRect2, Math.PI / 2);
    TH.addShape(550.1, -100, -125, wallRect2, Math.PI / 2);
    TH.addShape(650 - 0.1, -100, 125, wallRect2, Math.PI / 2);
    TH.addShape(650 - 0.1, -100, -125, wallRect2, Math.PI / 2);

    TH.addShape(475, -100, 50 - 0.1, wallRect2, 0);
    TH.addShape(475, -100, -50 + 0.1, wallRect2, 0);
    TH.addShape(725, -100, 50 - 0.1, wallRect2, 0);
    TH.addShape(725, -100, -50 + 0.1, wallRect2, 0);

    // Rotunda inner walls
    // Near
    MA.addWall({x: 450, y: -50}, {x: 505, y: -50});
    MA.addWall({x: 450, y: 50}, {x: 505, y: 50});
    // Far
    MA.addWall({x: 750, y: -50}, {x: 700, y: -50});
    MA.addWall({x: 750, y: 50}, {x: 700, y: 50});
    // Left
    MA.addWall({x: 550, y: -150}, {x: 550, y: -100});
    MA.addWall({x: 650, y: -150}, {x: 650, y: -100});
    // Right
    MA.addWall({x: 550, y: 150}, {x: 550, y: 100});
    MA.addWall({x: 650, y: 150}, {x: 650, y: 100});
    // Angled parts
    MA.addWall({x: 505, y: -50}, {x: 550, y: -100});
    MA.addWall({x: 505, y: 50}, {x: 550, y: 100});
    MA.addWall({x: 700, y: -50}, {x: 650, y: -100});
    MA.addWall({x: 700, y: 50}, {x: 650, y: 100});

    for (let index = 0; index < 5; index++) {
        addTunnel(800 + index * 100, 0, 0, 0);
        addObject(800 + index * 100, TH.floorY, 0, 0, models.simpleTunnel, Math.PI / 2);
        addTunnel(600, 0, 200 + index * 100, Math.PI / 2);
        addObject(600, TH.floorY, 200 + index * 100, 0, models.simpleTunnel, 0); // Right side
        addTunnel(600, 0, -200 - index * 100, Math.PI / 2);
        addObject(600, TH.floorY, -200 - index * 100, 0, models.simpleTunnel, 0); // Left side
    }

    // Top and bottom for rotunda.
    TH.addFloor({x: -1000, y: -1000}, {x: 1000, y: 1000}, 110);
    TH.addFloor({x: -1000, y: -1000}, {x: 1000, y: 1000}, -81);
    for (let index = -1; index < 5; index++) {
        // left near
        TH.addMovingModel({x: 505, y: 100 - index * 60, z: -95}, {x: 505, y: 40 - index * 60, z: -95}, models.waterfall, Math.PI / 4, 0.5, true);
        // right near
        TH.addMovingModel({x: 505, y: 100 - index * 60, z: 95}, {x: 505, y: 40 - index * 60, z: 95}, models.waterfall, -Math.PI / 4, 0.5, true);
        // left far
        TH.addMovingModel({x: 700, y: 100 - index * 60, z: -95}, {x: 700, y: 40 - index * 60, z: -95}, models.waterfall, -Math.PI / 4, 0.5, true);
        // right far
        TH.addMovingModel({x: 700, y: 100 - index * 60, z: 95}, {x: 700, y: 40 - index * 60, z: 95}, models.waterfall, Math.PI / 4, 0.5, true);
    }

    addObject(600, TH.floorY, -640, 10, models.sign, 0, 0.07);
    addLevelTrigger(600, -9, -640, loadLevel6);

    addObject(600, TH.floorY, 640, 10, models.sign, Math.PI, 0.07);
    addLevelTrigger(600, -9, 640, loadLevel6);

    addObject(1240, TH.floorY, 0, 10, models.sign, -Math.PI / 2, 0.07);
    addLevelTrigger(1240, -9, 0, loadLevel7);
}

function loadLevel6() {
    createPlayer(200, 0, 0);
    for (let index = 0; index < 2; index++) {
        addObject(200 + index * 100, TH.floorY, 0, 0, models.simpleTunnel, Math.PI / 2);
        addTunnel(200 + index * 100, 0, 0, 0);
    }

    // Visuals
    TH.addSpinningCylinderPart(499, 10, 0, 149, 75, 0.01, 0.392);
    TH.addSpinningCylinderPart(499, 10, 0, 141, 75, 0.01, 0.392);
    var floorShape = [{x:150,y:0.001,z:0},{x:147.11779206048456,y:0,z:29.263548302419238},{x:138.581929876693,y:0,z:57.40251485476347},{x:124.72044184538177,y:0,z:83.33553495294032},{x:106.06601717798213,y:0,z:106.06601717798212},{x:83.33553495294034,y:0,z:124.72044184538177},{x:57.402514854763474,y:0,z:138.581929876693},{x:29.26354830241925,y:0,z:147.11779206048456},{x:9.184850993605149e-15,y:0,z:150},{x:-29.263548302419228,y:0,z:147.11779206048456},{x:-57.40251485476346,y:0,z:138.581929876693},{x:-83.33553495294028,y:0,z:124.7204418453818},{x:-106.06601717798212,y:0,z:106.06601717798213},{x:-124.7204418453818,y:0,z:83.33553495294032},{x:-138.581929876693,y:0,z:57.40251485476349},{x:-147.11779206048456,y:0,z:29.263548302419288},{x:-150,y:0,z:1.8369701987210297e-14},{x:-147.11779206048456,y:0,z:-29.263548302419252},{x:-138.581929876693,y:0,z:-57.40251485476345},{x:-124.72044184538181,y:0,z:-83.33553495294028},{x:-106.06601717798215,y:0,z:-106.06601717798212},{x:-83.33553495294032,y:0,z:-124.72044184538177},{x:-57.402514854763545,y:0,z:-138.58192987669295},{x:-29.263548302419295,y:0,z:-147.11779206048453},{x:-2.7554552980815446e-14,y:0,z:-150},{x:29.263548302419245,y:0,z:-147.11779206048456},{x:57.4025148547635,y:0,z:-138.58192987669298},{x:83.33553495294026,y:0,z:-124.72044184538181},{x:106.06601717798209,y:0,z:-106.06601717798215},{x:124.72044184538177,y:0,z:-83.33553495294032},{x:138.58192987669295,y:0,z:-57.40251485476355},{x:147.11779206048453,y:0,z:-29.263548302419306}];
    TH.addShape(499, -29, 0, floorShape, 0);
    TH.addSpinningModel(499, 10, 0, models.spinroom, 0.01, 0.15, 'y', 0);
    TH.addSpinningModel(499, 10, 0, models.spinroomthreshhold, 0.01, 0.15, 'y', 0);
    TH.addSpinningModel(499, 10, 0, models.spinroom, 0.01, 0.14, 'y', 0);
    TH.addModel(499, 10, 0, models.spinroomfloor, 0, 0.14);

    /*
    // This code can be put in the line3d console to turn a selection into a list of points for MA.addFromPoints
    // Selection order determines order for the shape
    var points = ''
    selectedPoints.forEach((point) => {
        points = points + point.position.x + ' ' + point.position.z + ' ';
    });
    */
    // Collision shapes
    var revolvingWall = '-54.245376537751476 130.9599237334749 -78.75208053052857 117.86081754388582 -100.23238623319311 100.23238623319313 -117.86081754388582 78.75208053052862 -130.9599237334749 54.2453765377515 -139.02631349715793 27.654053145786232 -141.75 1.7359368377913732e-14 -139.02631349715793 -27.654053145786197 -130.9599237334749 -54.24537653775147 -117.86081754388583 -78.75208053052857 -100.23238623319314 -100.23238623319311 -78.75208053052862 -117.86081754388577 -54.245376537751554 -130.95992373347485 -27.654053145786236 -139.0263134971579 -2.60390525668706e-14 -141.75 27.65405314578619 -139.02631349715793 54.24537653775151 -130.95992373347488 78.75208053052856 -117.86081754388583 100.23238623319307 -100.23238623319314 117.86081754388577 -78.75208053052862 130.95992373347485 -54.24537653775156 139.0263134971579 -27.654053145786246 141.75 0 139.02631349715793 27.654053145786182 130.9599237334749 54.24537653775148 117.86081754388577 78.75208053052862 100.23238623319313 100.23238623319311 78.75208053052863 117.86081754388577 54.24537653775148 130.9599237334749 57.402514854763474 138.581929876693 83.33553495294034 124.72044184538177 106.06601717798213 106.06601717798212 124.72044184538177 83.33553495294032 138.581929876693 57.40251485476347 147.11779206048456 29.263548302419238 150 0 147.11779206048453 -29.263548302419306 138.58192987669295 -57.40251485476355 124.72044184538177 -83.33553495294032 106.06601717798209 -106.06601717798215 83.33553495294026 -124.72044184538181 57.4025148547635 -138.58192987669298 29.263548302419245 -147.11779206048456 -2.7554552980815446e-14 -150 -29.263548302419295 -147.11779206048453 -57.402514854763545 -138.58192987669295 -83.33553495294032 -124.72044184538177 -106.06601717798215 -106.06601717798212 -124.72044184538181 -83.33553495294028 -138.581929876693 -57.40251485476345 -147.11779206048456 -29.263548302419252 -150 1.8369701987210297e-14 -147.11779206048456 29.263548302419288 -138.581929876693 57.40251485476349 -124.7204418453818 83.33553495294032 -106.06601717798212 106.06601717798213 -83.33553495294028 124.7204418453818 -57.40251485476346 138.581929876693';
    MA.addFromPoints(499, -20, revolvingWall, true);
    var outerWall1 = '-138.581929876693 57.40251485476349 -152.44012286436234 63.142766340239845 -137.19248602992 91.66908844823436 -116.67261889578035 116.67261889578036 -91.66908844823432 137.19248602992 -63.14276634023981 152.44012286436234 -57.40251485476346 138.581929876693 -83.33553495294028 124.7204418453818 -106.06601717798212 106.06601717798213 -124.7204418453818 83.33553495294032';
    MA.addFromPoints(410, 90, outerWall1);
    var outerWallTop = '-152.44012286436234 -63.1427663402398 -137.19248602992002 -91.66908844823432 -116.67261889578037 -116.67261889578035 -91.66908844823436 -137.19248602991996 -63.1427663402399 -152.44012286436225 -32.18990313266123 -161.829571266533 -3.0310008278896993e-14 -165 32.18990313266117 -161.82957126653304 63.14276634023986 -152.44012286436228 91.6690884482343 -137.19248602992002 116.6726188957803 -116.67261889578037 137.19248602991996 -91.66908844823436 152.44012286436225 -63.142766340239916 138.58192987669295 -57.40251485476355 124.72044184538177 -83.33553495294032 106.06601717798209 -106.06601717798215 83.33553495294026 -124.72044184538181 57.4025148547635 -138.58192987669298 29.263548302419245 -147.11779206048456 -2.7554552980815446e-14 -150 -29.263548302419295 -147.11779206048453 -57.402514854763545 -138.58192987669295 -83.33553495294032 -124.72044184538177 -106.06601717798215 -106.06601717798212 -124.72044184538181 -83.33553495294028 -138.581929876693 -57.40251485476345';
    MA.addFromPoints(499, -118, outerWallTop);
    var outerWall3 = '57.402514854763474 138.581929876693 63.142766340239824 152.44012286436234 91.66908844823438 137.19248602991996 116.67261889578036 116.67261889578035 137.19248602991996 91.66908844823436 152.44012286436234 63.14276634023982 138.581929876693 57.40251485476347 124.72044184538177 83.33553495294032 106.06601717798213 106.06601717798212 83.33553495294034 124.72044184538177';
    MA.addFromPoints(585, 85, outerWall3);

    MA.addWall({x: 150, y: -60}, {x: 359, y: -60}); // Left wall near
    MA.addWall({x: 150, y: 60}, {x: 359, y: 60}); // Right wall near
    MA.addWall({x: 150, y: -60}, {x: 150, y: 60}); // Back wall

    TH.addModel(850, 0, 0, models.spinroommap, -Math.PI / 2, 0.09);

    addSpinningObject(500, 10, 0, models.gear, 0.01, 0.1, 0, 'z', Math.PI / 2);
    addSpinningObject(500, -15, 0, models.gear, -0.01, 0.1, 0, 'z', Math.PI / 2);
    addSpinningObject(490, -30, 0, models.gearflat, -0.01, 0.1, 0, 'y', Math.PI / 2);

    // Right tunnel
    for (let index = 0; index < 2; index++) {
        addObject(699 + index * 100, TH.floorY, 0, 0, models.simpleTunnel, Math.PI / 2);
        addTunnel(699 + index * 100, 0, 0, 0);
    }
    MA.addWall({x: 648, y: -60}, {x: 850, y: -60});
    MA.addWall({x: 648, y: 60}, {x: 850, y: 60});
    MA.addWall({x: 850, y: -60}, {x: 850, y: 60});
    
    // Bottom tunnel
    for (let index = 0; index < 2; index++) {
        addObject(500, TH.floorY, 200 + index * 100, 0, models.simpleTunnel, 0);
        addTunnel(500, 0, 200 + index * 100, Math.PI / 2);
    }
    MA.addWall({x: 440, y: 150}, {x: 440, y: 350});
    MA.addWall({x: 560, y: 150}, {x: 560, y: 350});
    MA.addWall({x: 440, y: 350}, {x: 560, y: 350});
}

function loadLevel7() {
    
}

function loadLevel8() {
    
}