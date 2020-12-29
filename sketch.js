const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var binPart1, binPart2, binPart3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	

	ground1 = new Ground(1000,650,2000,8)
	paper1 = new Paper(50,100,40,40)
	binPart1 = new Bin(998,550,20,180)
	binPart2 = new Bin(1080,630,150,20)
	binPart3 = new Bin(1160,550,20,180)

	Engine.run(engine);
}


function draw() {

background(0);

ground1.display();
paper1.display();
binPart1.display();
binPart2.display();
binPart3.display();

drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:385,y:-385})
	}
}
