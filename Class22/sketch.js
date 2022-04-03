var ball;
var ground
var bgImage
var tower
var towerImg
var angle
var canon
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bgImage = loadImage("background.gif")
    towerImg = loadImage("tower.png")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(0, height - 1, width * 2, 1)
	towerOptions = {
		isStatic:true
	}
	tower = Bodies.rectangle(160, 360, 160, 310, towerOptions)
	World.add(world, tower)
    
	canon = new Canon(180, 110, 130, 100, angle)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(bgImage,0,0,1200,600)
  Engine.update(engine);
  ground.show()
  push()
  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160, 310)
  pop()

  canon.display()

 
 
}



