const Polygon = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  slingShot;

function setup() {
  createCanvas(1000,500);
  polygon = Polygon.create();
  world = polygon.world;
  platform1 = new Ground(600,height,1200,20);
  platform2 = new Ground(390, 250, 300, 20);
  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  box9 = new Box(390,155,30,40);

  ball = new Ball(100,100);

  //log6 = new Log(230,180,80, PI/2);
  slingshot = new SlingShot(ball.body,{x:200, y:100});
}

function draw() {
  background("blue");  
  Polygon.update(polygon);
 // strokeWeight(4);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  platform1.display();
  platform2.display();
  ball.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}