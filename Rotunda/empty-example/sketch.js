diamondHeight = (Math.sqrt(2 * squareLen * squareLen)) * 0.9;
var radius;
var squareLen;
var diamondHeight;
var purpleWidth; 

function setup() {
  // Create the canvas
  createCanvas(900, 900);
  background(200);

  colorMode(RGB, 1);

  radius =  400

  squareLen = 30;

  purpleWidth = 68
  diamondHeight = (Math.sqrt(2 * squareLen * squareLen)) * 0.9;


  drawField()
}


function drawField()
{


  myCircle(0.937, 0.937, 0.812, 2 * radius) //base yellow circle
  myCircle(0.757, 0.773, 0.925, 2 * radius - 50 ) //blue circle
  myCircle(0.678, 0.910, 0.831, 2 * radius - purpleWidth ) //green circle
  myCircle(0.757, 0.773, 0.925, 2 * radius - purpleWidth - diamondHeight *2 ) //diamond circle

  myCircle(0.937, 0.937, 0.812, 2 * radius - purpleWidth - diamondHeight *2 - 20) //base yellow circle




  thick_8_line()

  diamondRing()
  thin_16_line()

  thin_8_line()
  myCircle(1, 1, 1, 0.5 * radius) // inner circle

}

function myCircle(r, g, b, size)
{
  push();
    fill(r, g, b)

    stroke(0);
    translate(width/2, height/2);

    circle(0, 0, size);

  pop();
}


function thick_8_line()
{
  push()
    stroke(0)
    strokeWeight(6)
    translate(width/2, height/2)

    for (let i = 0; i <= 2* PI; i += PI/4)
    {
      rotate(i)
      line(0, 0, 0, radius);
    }
  pop()
}

function mySquare()
{
  push()
    // translate(width/2, height/2);
    rotate(PI/4)

    rect(0, 0, squareLen, squareLen);
  pop()
}

function diamond()
{
  push()
    // translate(width/2, height/2);
    scale(1.8, 0.9)
    mySquare()
  pop()
}

function diamondRing()
{

  push()
    fill(0.906, 0.451, 0.529)

    translate(width/2, height/2);
    rotate(PI/16)

    for (let i = 0; i <= 2* PI; i += PI/8)
    {
      rotate(i)

        push()
          translate(0, -radius + purpleWidth/2);
          // translate(0, -radius);// distance from the center
          diamond();
        pop()
    }
  pop()
}

function thin_16_line()
{
  push()

    stroke(0)
    strokeWeight(2)
    translate(width/2, height/2)
        rotate(PI/16)
    for (let i = 0; i <= 2* PI; i += PI/8)
    {
      rotate(i)
      line(0, 0, 0, radius);
    }
  pop()
}

function thin_8_line()
{
  push()
    stroke(0)
    strokeWeight(2)
    translate(width/2, height/2)
    rotate(PI/8)
    for (let i = 0; i <= 2* PI; i += PI/4)
    {
      rotate(i)
      line(0, 0, 0, radius);
    }
  pop()
}
