//reference https://www.instagram.com/p/CI8o_z8nvv8/
let stars = []

function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1);

    background(0)

  for (let i = 0; i < 100; i++) 
  {
    stars.push(new Star())
  }

}


function draw()
{
    background(0)

    noStroke()
 
    if (frameCount % 60 == 0) print(frameRate())



    for (let i = 0; i < stars.length; i++) 
    {
      //stars[i].show();
      stars[i].update();
    }

}