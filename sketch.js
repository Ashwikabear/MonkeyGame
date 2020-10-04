var PLAY=1
var END=0
var gameState= PLAY;
var monkey , monkey_running,ground
var banana ,bananaImage, rock, obstacleImage
var obstacleGroup
var survivaltime,invisibleground,score
var foodGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20)

  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  ground = createSprite(400,330,900,10)
  ground.velocityX=-4;
  foodGroup=new Group();
  obstaclesGroup= new Group();
  invisibleground=createSprite(400,330,900,10)
  invisibleground.visible= false;
  survivaltime=0 
  score=0
  }
function MakeBanana(){
      if (frameCount%80===0){
banana=createSprite(200,Math.round(random(120,200)),5,5)
  banana.addImage(bananaImage)
  banana.velocityX=-4
  banana.scale=0.08
      banana.lifeTime=300}
  
 // foodGroup.add(banana) 
}
 
function rocks(){
   if (frameCount%80===0){

rock=createSprite(Math.round(random(200,400 )),300,5,5)
rock.addImage(obstacleImage)
     rock.velocityX=-4
  rock.lifetime=300
  rock.scale=0.14
  
    
   }
  //obstacleGroup.add(rock) 
  }

function draw() {
background(200)
  
  ground.x= ground.width/2;
  if (keyDown("space")&&monkey.y>=100){
  monkey.velocityY=-12
  }
  stroke("white");
  text(20)
  fill("white")
  text("score:"+score,320,50)
  stroke("black")
  textSize(20)
  fill("black")
  text("survival Time="+survivaltime,100,50)
  survivaltime= Math.round(frameCount/frameRate())
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(invisibleground)
  if(gameState===PLAY){
  MakeBanana();
 rocks();
  ground.velocityX=-4
    
              }
  if(obstaclesGroup.isTouching(monkey)){
  score=score+1
  }
  

drawSprites();  
}






