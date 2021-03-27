var wall,thickness
var bullet,speed,weight



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,200)
  wall.shapeColor=color(80,80,80)
bullet=createSprite(10,200,60,20)
  speed=random(223,321)
  weight=random(223,321)
  bullet.velocityX=speed
}

function draw() {
  background(255,255,255);  
  if(bullet.collide(wall)){
  bullet.velocityX=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
 if(damage>10){
   wall.shapeColor="red"
 }
 if(damage<=10){
  wall.shapeColor="green"
 }
}


 
  drawSprites();
}