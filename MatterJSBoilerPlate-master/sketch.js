const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone,launcher, ground,boy,boyImage,tree;
var mango1,mango2,mongo3,mango4,mango5,mango6,mango7,mango8;

function preload() {
   boyImage = loadImage("boy.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
	boy = createSprite(300,300);
	boy.addImage("boy",boyImage);
	boy.scale = 0.15;
	stone = new Stone(200,300,20,20);
	

	
	tree = new Tree(1000,190,400,400);

	mango1 = new Mango(900,189,10,10);
	mango2 = new Mango(950,195,10,10);
	mango3 = new Mango(990,185,10,10);
	mango4 = new Mango(920,60,10,10);
	mango5 = new Mango(1000,50,10,10);
	mango6 = new Mango(1050,100,10,10);
	mango7 = new Mango(1020,120,10,10);
	mango8 = new Mango(1080,150,10,10);

	launcher = new Launcher(stone.body,{x:200,y:200});
	
	
   
}

function draw(){
	background(225);
    Engine.update(engine);
	stone.display();
	tree.display();	
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);
	detectollision(stone,mango6);
	detectollision(stone,mango7);
	detectollision(stone,mango8);


	drawSprites();
}

function detectollision(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(dist<=mango.r+stone.r){
		matter.Body.setStatic(mango.body,false);
	}
}






function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
launcher.fly();
}
















