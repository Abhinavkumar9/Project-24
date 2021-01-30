const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper1,paper2, gameState,engine, world,dustbin,paper;
var backgroundImg;


function preload() {
backgroundImg= loadImage("bak.jpg")
}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 76, 10);
  paper = new Paper(70, 340, 50,60);

  
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background("Lightyellow");
    textSize(50);
    fill("Black");
    text("Press Enter key to Start!", 150, 200)
    if (keyCode === ENTER) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);

    background(backgroundImg);

    
    dustbin.display();
    paper.display();
  }

 
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 14,
      y: -15
    });
  }
 
}
