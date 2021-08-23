var ship,ship_running,edges;
var seaImage;
function preload(){
  seaImage=loadImage("sea.png");
  ship_running= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}
function setup(){
  createCanvas(10000,1000)
  sea=createSprite(400,200,50,10);
  sea.addImage(seaImage);
  edges = createEdgeSprites();
  ship=createSprite(650,300,50,50);
  ship.addAnimation("running",ship_running);
  ship.scale=0.5;
  

}
function draw(){
  background("white");
  sea.velocityX=-5
  if(sea.x<0){
   sea.x=sea.width/2
  }

  
  drawSprites();

}