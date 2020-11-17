

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var ground1, b1, b2;
var ground2, ground3;
var shooter;


function setup(){
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  
  ground1 = new Ground(500,590,1000,20);
  ground2 = new Ground(500,455,250,10)
  ground3 = new Ground(800,305,200,10)

  b1 = new Block(410,425);
  b2 = new Block(440,425);
  b3 = new Block(470,425);
  b4 = new Block(500,425);
  b5 = new Block(530,425);
  b6 = new Block(560,425);
  b7 = new Block(590,425);

  b8 = new Block(440,400);
  b9 = new Block(470,400);
  b10 = new Block(500,400);
  b11 = new Block(530,400);
  b12 = new Block(560,400);

  b13 = new Block(470,375);
  b14 = new Block(500,375);
  b15 = new Block(530,375);

  b16 = new Block(500,350)

  c1 = new Block(740,275);
  c2 = new Block(770,275);
  c3 = new Block(800,275);
  c4 = new Block(830,275);
  c5 = new Block(860,275);

  c6 = new Block(770,250);
  c7 = new Block(800,250);
  c8 = new Block(830,250);
  c9 = new Block(800,225);
  
  shooter = new Shoot(200,380)
  sling = new Sling(shooter.body,{x:200,y:350})
  
}

function draw(){
  background(255);
  
  
  Engine.update(engine);

  
  ground1.display();
  ground2.display();
  ground3.display();

  fill(241, 184, 225)
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  c6.display();
  c7.display();
  c8.display();
  
  fill(108,223,225)
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill(112,136,254)
  b13.display();
  b14.display();
  b15.display();
  c9.display();
  fill(97,205,151)
  b16.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  shooter.display();
  sling.display();
 
}

function mouseDragged(){
  Body.setPosition(shooter.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly();
}