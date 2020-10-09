var bullet, wall;

var speed, weight, thickness;

function setup() {
  createCanvas(1500,400);

  speed=random(200,400)
  weight=random(30,60)
  thickness=random(20,100)

  bullet= createSprite(40, 200, 50, 50);
  bullet.shapeColor="brown"

  wall=createSprite(1400,200,thickness,200)
  wall.shapeColor=color(30,230,30)

}

function draw() {
  background(0)
  
  bullet.velocityX=speed;

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if (damage>10){
      bullet.shapeColor="yellow"
    }
    
    if(damage<10){
      bullet.shapeColor="white"
    }
  }

  drawSprites();
}

function hasCollided(b,w){
  bulletRight= b.x+b.width/2;
  wallLeft=w.x-w.width/2;
  if(bulletRight>=wallLeft){
    return true
  }
  return false
}