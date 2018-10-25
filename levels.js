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

    addSpinningObject(720, -30, 0, models.flower, 0.01, 0.08, 10);
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
    }

    addObject(445, TH.floorY, -300, 0, models.tunnelEntrance, Math.PI / 2);
    MA.addWall({x: 450, y: -360}, {x: 850, y: -360});
    MA.addWall({x: 450, y: -240}, {x: 850, y: -240});
    MA.addWall({x: 450, y: -330}, {x: 450, y: -360});
    MA.addWall({x: 450, y: -240}, {x: 450, y: -270});
    MA.addWall({x: 850, y: -240}, {x: 850, y: -360}); // End of tunnel

    TH.addWall({x: 450, y: -361}, {x: 850, y: -361}, 100, 0);
    TH.addWall({x: 450, y: -239}, {x: 850, y: -239}, 100, 0);

    addObject(840, TH.floorY, -300, 10, models.sign, -Math.PI / 2, 0.07);
    addLevelTrigger(840, -9, -300, loadLevel1);
}
