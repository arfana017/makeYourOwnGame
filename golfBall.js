class Ball {

constructor(x,y,r) {

    var options = {

        isStatic: true

    }

    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(x,y,r,options);

    World.add(world,this.body);

}

    display() {

        fill(255);
        noStroke();
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);

    }

}