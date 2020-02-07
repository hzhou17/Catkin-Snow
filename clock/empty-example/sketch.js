var raise;

function remap(start, Value, end, newStart, newEnd)
{
  return  (newStart + (newEnd - newStart) * (Value - start)/(end - start))
}

function color_gradient(width, height, thickness) // height and width of the canvas. 
{                           //thickness of a subdivision. The thinner, the smoother.
  for (i = 0; i < height; i+= thickness)
  {
      var new_color = remap(0, i, height, 0, 1);

      push();

        fill(new_color);
        noStroke()

        rect(0, i, width, thickness);

      pop();
  }
}

function I() // tree trunk
{
    push()
      strokeWeight(2)
      rect(0, height/2, height/20/15, height/20)
    pop()
}

function tree(tx, ty)
{
    push()

      translate(tx, ty)
        I()

      translate(0, -height/20)
        quad(- 10, midH - 10, 
             + 10, midH - 10, 
             + 20, midH + 17.5, 
             - 20, midH + 17.5)

      translate(0, -20)
        quad(- 7.5, midH - 7.5, 
             + 7.5, midH - 7.5, 
             + 15, midH + 10, 
             - 15, midH + 10)

      translate(0, -7.5)
        triangle(0, height/2 - 20, 0 -12 , height/2, 0 + 12, height/2)

    pop()
}




function mountain_range(width, height, scaleX, tx, ty)
{
  push();

    translate(tx, ty);

      push();
        scale(scaleX,1);
          beginShape();
              for (i = -width; i < width; i+=1)
              {
                // noFill();
                raise = sin(i* .1840) + 
                        sin(i* .1900) + 
                        sin(i* .1960) +  
                        sin(i)* .2020 //magic noise number
         
                raise *= 30 ; 

                vertex(i, height/2 + raise);
              }
          endShape(CLOSE);
      pop();

    for (i = -width; i < width; i+=5)
    {
              raise = sin(i* .1840) + 
                      sin(i* .1900) + 
                      sin(i* .1960) +  
                      sin(i)* .2020 //magic noise number
   
          raise *= 30 ; 

          tree(i*scaleX, raise - height/20);
    }

  pop();

}






// ###################################################################################################
// ###################################################################################################
// ###################################################################################################
function setup()
{
  createCanvas(640, 360);

  midH = height/2

  colorMode(RGB, 1);

  blueColor = color(0.3, 0.5, 0.8);

  background (blueColor)

  white = color(0.95);
  black = color(0);
  blueColor = color(0.3, 0.5, 0.8);


}


function draw()
{
    color_gradient(width, height, 30)



      fill(0.8)
        mountain_range(width, height, 30, 350, -20) 

            mountain_range(width, height, 50, 0, 100)

    // tree(0,0)





}


// ################################################################
// ################################################################
// ################################################################


