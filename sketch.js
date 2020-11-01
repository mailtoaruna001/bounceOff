function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(400, 100, 50, 50);
 movingRect = createSprite(400,800,50,50);
 movingRect.velocityY=-5;
 fixedRect.velocityY=5;
}

function draw() {
  background(255,255,255); 

  

  bounceOff(movingRect , fixedRect);
  drawSprites();
}




