class Ball{
    constructor(x, y, d) {
        console.log("Box Constructor..1");
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, d , options);
        this.diameter = d;
        
        //this.image = loadImage("sprites/base.png");
        World.add(myWorld, this.body);
        //console.log("Box Constructor..");
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        
        push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        
        fill("red");
        stroke("yellow");
        strokeWeight(3);
        ellipse(pos.x, pos.y, this.diameter, this.diameter);
        pop();
      }
}