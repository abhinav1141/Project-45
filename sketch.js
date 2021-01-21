var monkey;
var monkey1img;
var backgroundsimg;
var backgrounds;
var ground;
var edges;
var fruitGroup;
var appleimg,bananaimg;
var score=0;
var lives=3;
var dinoimg,elephantimg;
var animalgroup;



function preload()
{
monkey1img=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
backgroundsimg=loadImage("jungle.jpg");
appleimg=loadImage("apple2.png");
bananaimg=loadImage("banana2.png");
dinoimg=loadImage("dinosaur.png");
elephantimg=loadImage("elephantsj.png");

}

function setup() {
	createCanvas(400, 400);

	
	
	backgrounds=createSprite(200,200);
	backgrounds.addImage(backgroundsimg);
	backgrounds.scale=0.9;
	backgrounds.velocityX=-3;
	monkey=createSprite(50,350);
	monkey.addAnimation("running",monkey1img);
    monkey.scale=0.1;
	
	ground=createSprite(200,390,400,10);
    ground.visible=false;
	

	edges=createEdgeSprites;

  fruitGroup=new Group();
  animalgroup=new Group();
}



function draw() {
	 

  if(backgrounds.x<0){
    backgrounds.x=width/2;
  }
  if(keyDown("space") && monkey.y>=250 )
      {
         monkey.velocityY=-18;
      }
   monkey.velocityY=monkey.velocityY+0.8;
   
  monkey.collide(ground);
  if(fruitGroup.isTouching(monkey)){
	for(var i=0;i<fruitGroup.length;i++){
		if(fruitGroup.get(i).isTouching(monkey)){
			fruitGroup.get(i).destroy();
	  score=score+40
  }
}   
}
if(monkey.isTouching(animalgroup)){
	lives=lives-1;
	for(var i=0;i<animalgroup.length;i++){
		if(animalgroup.get(i).isTouching(monkey)){
	
			animalgroup.get(i).destroy();
}
	}
}
  drawSprites();
  textSize(15);
	 textFont("GEORGIA");
	 fill("black");
	text("SCORE "+score,300,50);
	text("LIVES "+lives,50,50);
	spawnfruits();
	spawnanimals();
	if(lives<=0){
		background(0);
		fill("red");
		textSize(30);
		text("YOU LOSE",100,200);
	}
	if(score>=1000){
		background(0);
		fill("red");
		textSize(30);
		text("YOU WIN",100,200);
	}
}


function spawnfruits()
{
	if(frameCount%80===0)
    {
	  var fruits=createSprite(400,random(50,200)) ;
	  fruits.scale=0.5
	  fruits.velocityX=-4;
	  var rand = Math.round(random(1,2));
	  switch(rand){
		  case 1: fruits.addImage("fruit1",appleimg);
		  break;
		  case 2: fruits.addImage("fruit1", bananaimg);
		  break;
	}
	fruitGroup.add(fruits);
}
}
function spawnanimals()
{
	if(frameCount%60===0)
    {
	  var animals=createSprite(400,350) ;
	  animals.scale=0.2;
	  animals.velocityX=-4;
	  var rand = Math.round(random(1,2));
	  switch(rand){
		  case 1: animals.addImage("animal1",dinoimg);
		  break;
		  case 2: animals.addImage("animal1",elephantimg);
		  break;
	}
	animalgroup.add(animals);
}
}

