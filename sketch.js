
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,ground;	
var world;
var paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin(1200,650);
	paper=new Paper(500,650);

	Engine.run(engine);
  
}

function keyPressed() {
     
	var force = 10 ;
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.bodu,paper.body.position,{x:74 *force,y:-75 *force });
	}
		
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  Engine.update(engine);

  ground.display();
  dustbin.display();
  paper.display();
  

}

