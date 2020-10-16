var r1, r2;
function setup() {
  createCanvas(800,400);
  r1 = createSprite(200, 200, 50, 50);
  r1.shapeColor = "red"
  r2 = createSprite(600, 200, 50, 50);
  r2.shapeColor = "red"
  r1.debug = true
  r2.debug = true
}

function draw() {
  background(255,255,255);  
  r2.x = World.mouseX
  r2.y = World.mouseY
  if((r1.x -r2.x < r1.width /2 +r2.width/2) && (r2.x - r1.x < r1.width /2 +r2.width/2 )
  && (r1.y -r2.y< r1.width /2 +r2.width/2) && (r2.y - r1.y < r1.width /2 +r2.width/2 ))
  {
   r2.shapeColor = "green";
  r1.shapeColor = "green";
  }

  else
  {
   r2.shapeColor = "red";
  r1.shapeColor = "red";
  }
  
  drawSprites();
}