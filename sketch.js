
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3,ground,ball;



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	
    walll2 = createSprite(690,600,20,100); 
	walll2.shapeColor = color("pink"); 

	walll1 = createSprite(600,650,200,20);
	walll1.shapeColor = color("pink"); 
	
	walll3 = createSprite(510,600,20,100); 
	walll3.shapeColor = color("pink");

	ball = createSprite(200,350,30,30);

	ground = Bodies.rectangle(400, 620,800, 20 , {isStatic:true} );
	World.add(world, ground);
	
	Engine.run(engine);

  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
keypress();	
		

  drawSprites();
 
}

function keypress(){
	if (keypressed(UP_ARROW)){
	
	Matter.Body.applyForce(paperObject.ball,paperObject.ball,{x:85,y:-85})
	
	}
}


