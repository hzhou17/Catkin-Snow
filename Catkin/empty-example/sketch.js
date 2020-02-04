var black = (1, 0, 0)



function line_brush(tX, tY, angle)
{

      for(var i = 0; i < 3; i++)
    {
        push();

          translate(tX, tY);

          rotate(angle);

          translate(0, 10*i);
          
          stroke(black);
          strokeWeight(5)

        pop();
         

    }
}

// #################################################################
function setup()
{
  frameRate(24);

  createCanvas(1280, 720);

  colorMode(RGB, 1);



}


function draw()
{
  line_brush(500, 500, PI/3)




}
  