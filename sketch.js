
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var golfBall;
var hole;
var flagImage;
var s1wall1,s1wall2,s1wall3,s1wall4,s1wall5,s1wall6,s1wall7,s1wall8;
var s1bs1,s1obs2,s1obst3,s1obs4,s1obs5,s1obs6;
var s2wall1,s2wall2,s2wall3,s2wall4,s2wall5,s2wall6,s2wall7,s2wall8,s2wall9,s2wall10,s2wall11,s2wall12;
var s2obs1,s2obs2,s2obs3,s2obs4;
var s2bc1,s2bc2,s2bc3;
var score = 0;

var INST = 0; //instructions
var PLAY1 = 1; //stage1
var CONTINUE = 2; //if completed stage1, press space to move to stage2
var PLAY2 = 3; //stage2
var END1 = 4; //if lost stage1 or 2, can restart by pressing r
var END2 = 5; //if won stage 2
var gameState = 0;

tries = 4;

function preload()
{
	
  flagImage = loadImage("flagImage.png");
  arrowImg = loadImage("arrowimage.png");
  ballImg = loadImage("golfballImage.PNG")
}

function setup() {
	
createCanvas(700,900)

engine = Engine.create();
world = engine.world;

  //golfBall = new Ball(395,700,15,15);

  circle1 = new bounceObs(180,400,90,90);
  
  
  
  
}


function draw() {

  Engine.update(engine); 
  background(3,158,50)

  //ADD BALL MOVEMENT CODE + tries decrease
  //ADD PLAY BUTTON AND PLAYER NAME thing

 if(gameState === 0) { 

  textSize(50);
  fill(255);
  text("Welcome!",225,200);

  text("To win, get the golf ball into",50,300);
  text("the hole!",250,370);
  text("You only get a certain amount",20,450);
  text("of tries to complete each level",20,500);

  text("Press Space to Start!",100,600);

  if(keyCode === 32 && gameState === 0) {

    gameState = 1;

  }

 }

 if(gameState === 1) { //add flag image


 
  arrow = createSprite(400, 700);
  arrow.addImage(arrowImg)
  arrow.scale = 0.06
  arrow.rotateToDirection = true;
  golfBall1 = createSprite(395,700,15,15);
  golfBall1.addImage(ballImg)

  if (keyDown("LEFT_ARROW")) {
    arrow.rotation -= 5;
  } else if (keyDown("RIGHT_ARROW")) {
    arrow.rotation += 5;
  }
arrow.x = golfBall1.x;
  arrow.y = golfBall1.y;
  golfBall1.rotation = arrow.rotation;

  s1wall1 = createSprite(480,800,230,10)
  s1wall1.shapeColor = "white";
  s1wall2 = createSprite(600,705,10,200)
  s1wall2.shapeColor = "white";
  s1wall3 = createSprite(440,417,10,500)
  s1wall3.shapeColor = "white";
  s1wall3.rotation = 320;
  s1wall4 = createSprite(370,720,10,170)
  s1wall4.shapeColor = "white";
  s1wall5 = createSprite(210,447,10,500)
  s1wall5.shapeColor = "white";
  s1wall5.rotation = 320;
  s1wall6 = createSprite(280.9,130,10,200)
  s1wall6.shapeColor = "white";
  s1wall7 = createSprite(50,150,10,220)
  s1wall7.shapeColor = "white";
  s1wall8 = createSprite(165,35,240,10)
  s1wall8.shapeColor = "white";
  s1wall9 = createSprite(425,685,150,10);
  s1wall9.shapeColor = "white";
  s1wall9.rotation = 40;

  s1obs1 = createSprite(465,510,100,10)
  s1obs1.shapeColor = "white";
  s1obs2 = createSprite(255,440,100,10)
  s1obs2.shapeColor = "white";
  s1obs3 = createSprite(285,290,100,10)
  s1obs3.shapeColor = "white";
  s1obs4 = createSprite(100,255,100,10)
  s1obs4.shapeColor = "white";

  golfBall1.collide(s1wall1);
  golfBall1.collide(s1wall2);
  golfBall1.collide(s1wall3);
  golfBall1.collide(s1wall4);
  golfBall1.collide(s1wall5);
  golfBall1.collide(s1wall6);
  golfBall1.collide(s1wall7);
  golfBall1.collide(s1wall8);
  golfBall1.collide(s1wall9);

  golfBall1.collide(s1obs1);
  golfBall1.collide(s1obs2);
  golfBall1.collide(s1obs3);
  golfBall1.collide(s1obs4);

  hole1 = createSprite(250,73,20,20);
  hole1.addImage("arrow", flagImage);
  hole1.scale = 1.15;


  if(golfBall1.isTouching(hole1)) {

    gameState = 2;

  }

  if(tries = 0 && gameState === 1){

    gameState = 4;

  }

  }

  if(gameState === 2) { //add coordinates for text

    textSize(50);
    fill(255);
    text("Congrats!",230,270);
    text("You passed the first level!",60,340);
    text("Press Space to go to",100,420);
    text("Stage 2",250,490);

    if(keyCode === 32 && gameState === 2) {

      gameState = 3;

    }

  }

  if(gameState === 3) { //put coordinates for hole, add flag image

    tries = 7;
    
  golfBall2 = createSprite(495,700,15,15);

  s2wall1 = createSprite(520,850,200,10);
  s2wall1.shapeColor = "white";
  s2wall2 = createSprite(620,705,10,300);
  s2wall2.shapeColor = "white";
  s2wall3 = createSprite(355,768,10,220);
  s2wall3.shapeColor = "white";
  s2wall3.rotation = 320;
  s2wall4 = createSprite(520,550,210,10);
  s2wall4.shapeColor = "white";
  s2wall5 = createSprite(370,495,10,150);
  s2wall5.shapeColor = "white";
  s2wall5.rotation = 320;
  s2wall6 = createSprite(190,687,200,10);
  s2wall6.shapeColor = "white";
  s2wall7 = createSprite(451,393,280,10);
  s2wall7.rotation = 340;
  s2wall7.shapeColor = "white";
  s2wall8 = createSprite(580,180,10,340);
  s2wall8.shapeColor = "white";
  s2wall9 = createSprite(480,15,200,10);
  s2wall9.shapeColor = "white";
  s2wall10 = createSprite(90,500,10,383);
  s2wall10.shapeColor = "white";
  s2wall11 = createSprite(380,85,10,150);
  s2wall11.shapeColor = "white";
  s2wall12 = createSprite(170,310,170,10);
  s2wall12.shapeColor = "white";
  s2wall13 = createSprite(250,230,10,150);
  s2wall13.shapeColor = "white";
  s2wall14 = createSprite(315,160,140,10);
  s2wall14.shapeColor = "white";

  s2obs1 = createSprite(200,620,10,150);
  s2obs1.shapeColor = "white";
  s2obs1.rotation = 20;
  s2obs2 = createSprite(360,400,100,10);
  s2obs2.shapeColor = "white";
  s2obs2.rotation = 10;
  s2obs3 = createSprite(350,250,10,130);
  s2obs3.shapeColor = "white";
  s2obs3.rotation = 300;
  s2obs4 = createSprite(420,160,40,40);
  s2obs4.shapeColor = "white";

  hole2 = createSprite(600,50,20,20);
  hole2.addImage("arrow", flagImage)
  hole2.scale = 1.15;

  golfBall2.collide(s2wall1);
  golfBall2.collide(s2wall2);
  golfBall2.collide(s2wall3);
  golfBall2.collide(s2wall4);
  golfBall2.collide(s2wall5);
  golfBall2.collide(s2wall6);
  golfBall2.collide(s2wall7);
  golfBall2.collide(s2wall8);
  golfBall2.collide(s2wall9);
  golfBall2.collide(s2wall10);
  golfBall2.collide(s2wall11);
  golfBall2.collide(s2wall12);
  golfBall2.collide(s2wall13);
  golfBall2.collide(s2wall14);

  golfBall2.collide(s2obs1);
  golfBall2.collide(s2obs2);
  golfBall2.collide(s2obs3);
  golfBall2.collide(s2obs4);

    if(tries = 0 && gameState === 3) {

      gameState = 4;

    }

    if(golfBall2.isTouching(hole2)) {

      gameState = 5;

    }



  }

  if(gameState === 4) { //add coordinates for text

    textSize(50);
    fill(255);
    text("You lost!");
    text("Press 'r' to try again!");

    if(keyDown("r") && gameState === 4) {

      gameState = 1;

    }

  }

  if(gameState == 5) { //add coordinates

    textSize(50);
    fill(255);
    text("You passed both levels!");
    text("Congrats!");
    text("Thanks for playing!");

  }

	drawSprites();
	
}

/*

function detectollision(stone1,mango1) {

	mangoBodyPosition = mango1.body.position
	stoneBodyPosition = stone1.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	 if(distance <= mango1.r + stone1.r) {

		Matter.body.setStatic(mango1.body,false);

	 }

}

function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
      
		Matter.Body.setStatic(lmango.body,false);
		
    }

  }*/
