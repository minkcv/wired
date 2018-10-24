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

    for (var index = -30; index < 30; index++) {
        addObject(840, -700, index * 100 + 10, 0, models.simpleTunnel, 0);
        addObject(800, 60, index * 100 + 10, 0, models.simpleTunnel, 0);
        addObject(860, -300, index * 100 + 10, 0, models.simpleTunnel, 0);

        addObject(index * 100, 200, -800, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, -200, -400, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, -500, -100, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, -160, 400, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, 300, 800, 0, models.simpleTunnel, Math.PI / 2);
        addObject(index * 100, 160, 1200, 0, models.simpleTunnel, Math.PI / 2);


        addObject(400, index * 100, 1200, 0, models.shaft, Math.PI / 2);
        addObject(1400, index * 100, 200, 0, models.shaft, Math.PI / 2);
        addObject(600, index * 100, 600, 0, models.shaft, Math.PI / 2);
        addObject(600, index * 100, -100, 0, models.shaft, Math.PI / 2);
    }

    TH.addMovingModel({x: -2000, y: 300, z: 380}, {x: 4000, y: 300, z: 380}, models.ship, Math.PI, 0.7, true, 0.3);
    TH.addMovingModel({x: 4000, y: -300, z: -380}, {x: -4000, y: -300, z: -380}, models.ship, 0, 0.7, true, 0.3);
    TH.addMovingModel({x: 300, y: 30, z: -3380}, {x: 300, y: 30, z: 3380}, models.ship, Math.PI / 2, 0.7, true, 0.3);
    TH.addMovingModel({x: 400, y: -30, z: 4000}, {x: 400, y: -30, z: -4000}, models.ship, -Math.PI / 2, 0.4, true, 0.3);
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

    addSpinningObject(720, -30, 0, models.flower, 0.01, 0.08, 10);
    addObject(820, -45, -60, 10, models.angel, -Math.PI / 2);
    addObject(820, -45, 60, 10, models.angel, -Math.PI / 2);
}