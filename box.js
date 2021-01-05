class Box{
    constructor(x, y, width, height) {
        console.log("Box Constructor..1");
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(myWorld, this.body);
        console.log("Box Constructor..");
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        console.log("Box display" + pos.x + " : " + pos.y) ;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        fill("green");
        stroke("yellow");
        strokeWeight(3);
        rect(0, 0, this.width, this.height);
        pop();
      }
}