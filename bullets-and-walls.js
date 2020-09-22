var bullet, wall, speed, weight, damage;

function setup() {
  createCanvas(1200, 400);
  bullet = createSprite(40, 200, 80, 50);
  bullet.shapeColor = rgb(179, 139, 32);
  wallThickness = random(22,83);
  wall = createSprite(1100, 200, wallThickness, 200)
  weight = random(30,52);
  speed = random(223,321);
  damage = (0.5*weight*speed*speed)/(wallThickness*wallThickness*wallThickness);
}

function draw() {
  background(0,0,0);
  bullet.velocityX = speed;
  if (bullet.collide(wall)) {
    if (damage < 16) {
      wall.shapeColor = "Green";
    }
    
    if (damage > 16) {
      wall.shapeColor = "red";
    }
  }
  drawSprites();
}