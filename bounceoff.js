var movrect, fixrect;

function setup() {
  createCanvas(1280,700);
  fixrect = createSprite(1280/2, 120, 100, 200);
  movrect = createSprite(1280/2,680,200,100);

  movrect.shapeColor = "green";
    fixrect.shapeColor = "green";

    movrect.velocityY = -2;
fixrect.velocityY = 2;


}

function draw() {
background(150);
//movrect.y = World.mouseY;  
//movrect.x = World.mouseX;





  //&& fixrect.x - movrect.x < fixrect.width/2 + movrect.width/2 && 
  //movrect.x - fixrect.x < fixrect.width/2 + movrect.width/2)
  



  drawSprites();
}








