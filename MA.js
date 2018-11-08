var MA = {
    renderWidth : 800,
    renderHeight: 600,
    engine : null,
    render : null,
    player : null,
    creatures : [],
    init : function() {
        // module aliases
        var Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies;

        MA.engine = Engine.create();

        if (debug) {
            MA.render = Render.create({
                element: document.getElementById('map'),
                engine: MA.engine,
                bounds: {min: {x:-300, y:-300}, max: {x:300, y:300}},
                options: {
                    showAngleIndicator: true
                }
            });
        }

        MA.engine.world.gravity.y = 0;

        Matter.Events.on(MA.engine, 'afterUpdate', function(event){MA._update(event)})
    },
    createPlayer : function(x, y, angle) {
        MA.player = Matter.Bodies.circle(x, y, 5);
        MA.player.mass = 150;
        MA.player.frictionAir = 1;
        MA.rotatePlayer(angle);
        Matter.World.add(MA.engine.world, MA.player);
    },
    rotatePlayer : function(angle) {
        Matter.Body.rotate(MA.player, angle);
    },
    run : function() {
        Matter.Engine.run(MA.engine);
        if (debug)
            Matter.Render.run(MA.render);
    },
    movePlayer : function(x, y) {
        Matter.Body.translate(MA.player, {x: x, y: y});
    },
    updateView : function() {
        var x = MA.player.position.x;
        var y = MA.player.position.y;
        MA.render.bounds.min.x = x - MA.renderWidth / 2;
        MA.render.bounds.max.x = x + MA.renderWidth / 2;
        MA.render.bounds.min.y = y - MA.renderHeight / 2;
        MA.render.bounds.max.y = y + MA.renderHeight / 2;
    },
    _update : function(event) {
        for (index in MA.creatures) {
            var body = MA.creatures[index].body;
            Matter.Body.rotate(body, -0.01, {x: body.otherX, y: body.otherY});
        }
    },
    addCircle : function(x, z, radius, sprite) {
        var circle = Matter.Bodies.circle(x, z, radius, {isStatic: sprite == null});
        Matter.World.add(MA.engine.world, circle);
        if (sprite) {
            MA.creatures.push({body: circle, sprite: sprite});
        }
        return circle;
    },
    addFromPoints : function(x, z, points) {
        var shape = Matter.Vertices.fromPath(points);
        var body = Matter.Bodies.fromVertices(x, z, shape, {isStatic: true});
        body.friction = 0;
        body.frictionAir = 0;
        body.otherX = x;
        body.otherY = z+20;
        MA.creatures.push({body: body});
        Matter.World.add(MA.engine.world, body);
    },
    addBox : function(x, y, width, depth) {
        var boxA = Matter.Bodies.rectangle(x, y, width, depth, {isStatic: true});
        boxA.friction = 0;
        boxA.frictionAir = 0;
        Matter.World.add(MA.engine.world, boxA);
    },
    addWall : function(p1, p2) {
        var length = distance(p1, p2);
        var x = (p2.x + p1.x) / 2;
        var y = (p2.y + p1.y) / 2;
        // horizontal until rotated
        var rect = Matter.Bodies.rectangle(x, y, length, 2, {isStatic: true, chamfer: {radius:1}});
        var angle = -Math.atan((p1.y - p2.y) / (p2.x - p1.x));
        Matter.Body.rotate(rect, angle);
        Matter.World.add(MA.engine.world, rect);
    },
    clearWorld : function() {
        Matter.World.clear(MA.engine.world);
    }
}
