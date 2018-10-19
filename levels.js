function loadLevel1() {
    createPlayer(0, 0, Math.PI / 2);
    for (let index = 0; index < 20; index++) {
        addObject(0, -20, index * 105, 0, tunnel);
    }
    MA.addWall({x: 60, y: -55}, {x: 60, y: 2045});
    MA.addWall({x: -60, y: -55}, {x: -60, y: 2045});
    MA.addWall({x:60, y: -55}, {x: -60, y: -55});
    MA.addWall({x:60, y: 2045}, {x: -60, y: 2045});
}
