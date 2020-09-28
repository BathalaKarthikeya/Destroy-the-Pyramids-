const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground01,ground1,ground2;
var ball;
var constraint;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17,box18;
var box19,box20,box21,box22,box23,box24,box25,box26;
var polygon_img;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

  ground01 = new Ground(1500/2,700,width,50);
	ground1 = new Ground(775,600,400,50);
	ground2 = new Ground(1175,300,400,50);

  var options ={
    restitution:1
  }
  ball = Bodies.circle(200,400,20,options);
  World.add(world,ball);

	constraint = new Constraint(this.ball,{x:200,y:400});

  //first layer
	box1 = new Box(700,550,40,50);
	box2 = new Box(730,550,40,50);
	box3 = new Box(760,550,40,50);
	box4 = new Box(790,550,40,50);
	box5 = new Box(820,550,40,50);
	box6 = new Box(850,550,40,50);

  //second layer
	box7 = new Box(730,500,40,50);
	box8 = new Box(760,500,40,50);
	box9 = new Box(790,500,40,50);
	box10 = new Box(820,500,40,50);

  //third layer
	box11 = new Box(750,450,40,50);
	box12 = new Box(800,450,40,50);

  //fourth layer
	box13 = new Box(775,400,40,50);

  //first layer
	box14 = new Box(1100,250,40,50);
	box15 = new Box(1130,250,40,50);
	box16 = new Box(1160,250,40,50);
	box17 = new Box(1190,250,40,50);
	box18 = new Box(1220,250,40,50);
	box19 = new Box(1250,250,40,50);

  //second layer
	box20 = new Box(1130,200,40,50);
	box21 = new Box(1160,200,40,50);
	box22 = new Box(1190,200,40,50);
	box23 = new Box(1220,200,40,50);

  //third layer
	box24 = new Box(1200,150,40,50);
	box25 = new Box(1150,150,40,50);

  //fourth layer
	box26 = new Box(1175,100,40,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ground01.display();
  ground1.display();
  ground2.display();
 
  constraint.display();

  fill("yellow");

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  fill("lightgreen");

  box7.display();
  box8.display();
  box9.display();
  box10.display();

  fill("white");

  box11.display();
  box12.display();

  fill("green");
  
  box13.display();

  fill("lightgreen");

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  fill("yellow");

  box20.display();
  box21.display();
  box22.display();
  box23.display();

  fill("orange");

  box24.display();
  box25.display();

  fill("red");
  
  box26.display();

  imageMode(CENTER);
  image(polygon_img,ball.position.x,ball.position.y,40,40);
 
  drawSprites();

  textSize(30);
  fill("black");
  text("Destroy the Pyramids!! Drag the polygon and release it, Press space to play again!",100,50);
 
}
function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	constraint.fly();
}
function keyPressed(){
	if(keyCode === 32){
	   Matter.Body.setPosition(this.ball,{x:200,y:400});
	   constraint.attach(this.ball);
	}
}