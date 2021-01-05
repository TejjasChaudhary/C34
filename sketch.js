const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

var ground, box1;
function preload() {


}

function setup() {
createCanvas(700,500);

    myEngine = Engine.create();
    myWorld  = myEngine.world;
  
    ground = new Ground(350,480, 700, 20);
    console.log(ground);

    
    box1 = new Box (600,430,70,70 );
    box2 = new Box (600,360,70,70 );
    box3 = new Box (600,290,70,70 );
    box4 = new Box (600,220,70,70 );
    box5 = new Box (600,150,70,70 );
    
    ball = new Ball (100,250,30 );
    rope = new Rope ( ball.body , {x:200,y: 50  }  )

    
    console.log(box1);


}

function draw() {
//background(150);
Engine.update(myEngine);

ground.display();

/*box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
*/
ball.display();

rope.display();



}

