//Sprite creation
//Click to create a new sprite with random speed
var myImage;
var loadedImages = [];  


function setup() 
{
  createCanvas(800, 400);

  for (let i = 0; i < 10; i++) //10 pictures in the folder
  {
    loadedImages[i] = loadImage('assets/' + i + '.png');
  }
}

function draw() 
{
  background(255, 255, 255);

  fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width/2, height/2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();
}

function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable

  var currentImage = loadedImages[Math.floor(Math.random() * loadedImages.length)];

  var blueSprite = createSprite(mouseX, mouseY, 0, 0);
  blueSprite.scale = 0.1;
  blueSprite.rotationSpeed = 5;

  blueSprite.addImage(currentImage);

  blueSprite.velocity.x = random(-5, 5);
  blueSprite.velocity.y = random(-5, 5);

  blueSprite.rotationSpeed = 2 * blueSprite.velocity.x;
}
