let amt, startColor, newColor;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB, 1)
  
  startColor = color(0);
  newColor = color(1);
  amt = 0;

  background(startColor);
   
}

function draw() 
{
  background(lerpColor(startColor, newColor, amt));
  amt += 0.005;
  // if(amt >= 1)
  // {
  //   amt = 0.0;
    // startColor = newColor;
    // newColor = color(random(255),random(255),random(255)

      ;
  // }
}