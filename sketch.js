
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Bin (400,680,800,20)
bin1=new Bin (600,600,20,140)
bin2 = new Bin (750 , 600, 20 , 140)
var ball_options= {
	restitution : 0.5,
	isStatic : false,
	density : 1
}
ball=Bodies.circle(200,661,20,ball_options)
World . add (world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  bin1.display()
  bin2.display()
  drawSprites();
 ellipse(ball.position.x,ball.position . y,20,20)
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50})
	}
}


