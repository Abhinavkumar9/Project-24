const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper1,paper2, gameState,engine, world,dustbin,paper;
var background, backgroundImg;


function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(70, 300, 10);
  paper1 = new Paper(50, 300, 13);
  paper2 = new Paper(140, 300, 12);
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

    background("black");
    textSize(21);
    fill("Lightgreen");
    text("Press Up arrow to move first paper, press Right arrow to move second paper",
     10, 40)
     textSize(21);
    fill("Lightgreen");
    text("and press Down key to move third paper!",
    180, 65)
    dustbin.display();
    paper.display();
    paper1.display();
    paper2.display();
  }

 
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 14,
      y: -13
    });
  }
    if (keyCode === RIGHT_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper1.body, paper1.body.position, {
      x: 10,
      y: -13
  });
}
if (keyCode === DOWN_ARROW && gameState === "play") {
  Matter.Body.applyForce(paper2.body, paper2.body.position, {
    x: 12,
    y: -13
});
}
}
