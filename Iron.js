class Iron  {
    constructor(x, y) {
        var options = {
            restitution: 0.8,
            friction: 3,
            density: 30
        };

        this.width = 100;
        this.height = 100;
        this.body = Bodies.rectangle(x, y, 30, 30, options);

        World.add(world, this.body);
    };
    display() {
        var pos = this.body.position;


        push();
        translate(pos.x, pos.y);

        strokeWeight(3);
        stroke('white')
        fill('black')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
    };
};
