var starImg,bgImg;
var star, starBody;
var farimg;
var fari,fariBody;
var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	farimg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	sound = loadSound("sound/JoyMusic.mp3");
}

function setup(){
var canvas = createCanvas(700,700);
	//create fairy sprite and add animation for fairy
	fari = createSprite(150,500);
	fari.addAnimation("fairy",farimg);
	fari.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	fariBody = Bodies.rectangle(150 , 500 , 100,150,{restitution:0.5, isStatic:true});
	World.add(world, fariBody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
  fari.x= fariBody.position.x 
  fari.y= fariBody.position.y 
  console.log(star.y);

 if(star.y > 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody,true);
	sound.play();
 }
  keyPressed();
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyDown(LEFT_ARROW)) {
		fariBody.position.x=fariBody.position.x - 2;
	}
	if(keyDown(RIGHT_ARROW)) {
		fariBody.position.x=fariBody.position.x + 2;
	}
}
