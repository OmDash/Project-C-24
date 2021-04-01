class Stone {
    constructor(x, y) {
        var options = {
            restitution: 0.8,
            friction: 0.9,
            density: 12
        };

        this.width = 100;
        this.height = 30;
        this.body = Bodies.rectangle(x, y, 100, 50, options);

        World.add(world, this.body);
    };
    display() {
        var pos = this.body.position;


        push();
        translate(pos.x, pos.y);

        strokeWeight(3);
        stroke('white')
        fill('red')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
    };
};
