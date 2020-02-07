var raise;




function I(tx, ty)
{
    push()

      strokeWeight(2)
      rect(width/2, height/2, height/20/15, height/20)

    pop()
}


  function tree(tx, ty)
  {
      push()

        translate(tx, ty)

        I()

        translate(0, -height/20)

        quad(midW - 10, midH - 10, 
             midW + 10, midH - 10, 
             midW + 20, midH + 17.5, 
             midW - 20, midH + 17.5)

        translate(0, -20)

        quad(midW - 7.5, midH - 7.5, 
             midW + 7.5, midH - 7.5, 
             midW + 15, midH + 10, 
             midW - 15, midH + 10)

        translate(0, -7.5)

        triangle(width/2, height/2 - 20, width/2 -12 , height/2, width/2 + 12, height/2)

      pop()

  }


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

  function mountain_range(width, height)
  {
    push()
    // scale(20,1)
    beginShape()
        for (i = 0; i < width; i+=1)
        {
          noFill();

          raise = sin(i * .1960) +  sin(i) * .2020 //magic noise number
   
          raise *= 30 ; 

          vertex(i*20, height/2 + raise)

          // tree(i*20, height/2 + raise)
          rect(i*20, height/2 + raise, 5, 5)

        }
    endShape()
    pop()


  }






// ###################################################################################################
// ###################################################################################################
// ###################################################################################################
function setup()
{
  createCanvas(640, 360);
  midW = width/2
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


    mountain_range(width, height)









}


// ################################################################
// ################################################################
// ################################################################


