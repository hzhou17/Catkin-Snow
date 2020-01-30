

function setup() {
  createCanvas(400, 400);
  colorMode(RGB, 1)
  background(0.3)

   
}

function draw() 
{

  fill(0.5, 0.9, 1)
  circle(width/2, height/2, 50)

  fill(0)
  translate(width/2, height/2)
  
  for (let i =0; i<9; i++)
  {
    rect(0,0 , 0.01, 25)
    rotate(PI/4)
  }
  

}


// function one_line()