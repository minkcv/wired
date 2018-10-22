function loadLevel1() {
    createPlayer(0, 0, Math.PI / 2);
    addObject(0, -20, 0, 0, intersection, 0);
    for (let index = 1; index < 10; index++) {
        addObject(0, -20, index * 100 + 10, 0, tunnel, 0);
    }
    for (let index = 1; index < 10; index++) {
        addObject(100 * index + 10, -20, 0, 0, tunnel, Math.PI / 2);
    }
    for (let index = 1; index < 10; index++) {
        addObject(0, -20, -index * 100 - 10, 0, tunnel, 0);
    }
    for (let index = 1; index < 10; index++) {
        addObject(-index * 100 - 10, -20, 0, 0, tunnel, Math.PI / 2);
    }
    MA.addWall({x: 60, y: 60}, {x: 60, y: 1000});
    MA.addWall({x: -60, y: 60}, {x: -60, y: 1000});
    MA.addWall({x: 60, y: 1000}, {x: -60, y: 1000});

    TH.addWallPlane({x: 61, y: 61}, {x: 61, y: 1001}, 1, 100, null, 0);
    TH.addWallPlane({x: -61, y: 61}, {x: -61, y: 1001}, 1, 100, null, 0);
    
    MA.addWall({x: 60, y: -60}, {x: 60, y: -1000});
    MA.addWall({x: -60, y: -60}, {x: -60, y: -1000});
    MA.addWall({x: 60, y: -1000}, {x: -60, y: -1000});
    
    TH.addWallPlane({x: 61, y: -61}, {x: 61, y: -1001}, 1, 100, null, 0);
    TH.addWallPlane({x: -61, y: -61}, {x: -61, y: -1001}, 1, 100, null, 0);

    MA.addWall({x: -60, y: 60}, {x: -1000, y: 60});
    MA.addWall({x: -60, y: -60}, {x: -1000, y: -60});
    MA.addWall({x: -1000, y: 60}, {x: -1000, y: -60});

    MA.addWall({x: 60, y: 60}, {x: 1000, y: 60});
    MA.addWall({x: 60, y: -60}, {x: 1000, y: -60});
    MA.addWall({x: 1000, y: 60}, {x: 1000, y: -60});
}
