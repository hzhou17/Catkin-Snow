var xSpeed = -2;
var ySpeed = 7;

let x, y;

function setup()
{
  createCanvas(1280, 720);

  colorMode(RGB, 1);

  x = width/2;
  y = 0;

}

function draw()
{
  background(0.5);
  // angle = slider.value();
  stroke(0.2, 0.1, 0.1, 1.);
  fill(1.35, 1.2, 1.1, 1.);

for (let i=0; i<20; i++)
{
  // push();
  circle(x, y, 20);
  translate(random(i)*width, noise(i)*width)
  // pop();


}
  // circle(x, y, 20);

  x += xSpeed;
  y += ySpeed;

  if ( y > height)
  {
    y = 0;
    x = width/2;
  }


}
