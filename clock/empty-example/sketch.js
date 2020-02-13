var raise;
var tree_sx;
var tree_sy;

function remap(start, Value, end, newStart, newEnd)
{
    return  (newStart + (newEnd - newStart) * (Value - start)/(end - start))
}

function color_gradient(width, height, thickness) // height and width of the canvas. 
{                            //thickness of a subdivision. The thinner, the smoother.
    let range = height - 200 //life up the canvas by 200

    for (i = 0; i < range; i+= thickness)
    {
      var new_color = remap(0, i, range, 0, 0.7);

      push();
                                                         //Finer sky color adjustment
        fill(new_color - 0.3, new_color - 0.1, new_color + 0.3); //for the blue background 
        noStroke()                                               
        rect(0, i, width, thickness);

      pop();
    }
}

function star(len, wid) // double for loop with noise in x and y translation to scatter 
{                       //the stars in the night sky.
    push()
    rotate(PI/9)

      for(var i = 0; i < len; i += 50)
    {
         for(var j = 0; j < wid; j += 75)
         {
            push();

                noStroke();
                fill(1, 1, 0, random(0.5, 1))
                translate(i -450 , -300);

                translate(width * noise(i, j), height * noise(i, j))

                circle(0, 0, noise(i)*3)

            pop();
         }
    }
    pop()
}



function I() // tree trunk
{
    push()
      strokeWeight(2)
      rect(0, height/2, height/20/15, height/25)
    pop()
}

function tree(tx, ty, tree_sx, tree_sy)
{
    push()

        translate(tx, ty)
        scale(tree_sx, tree_sy)

        strokeWeight(2)
        rect(0, height/2, height/20/15, height/25)


        translate(0, -height/40)
        quad(- 10, midH - 9, 
             + 10, midH - 7, 
             + 20, midH + 17.5, 
             - 20, midH + 17.5)

        translate(0, -20)
        quad(- 7.5, midH - 5, 
             + 7.5, midH - 6, 
             + 15, midH + 10, 
             - 15, midH + 10)

        translate(0, -7.5)
        triangle(0, height/2 - 20, 
                0 -12 , height/2, 
                0 + 12, height/2+2)

    pop()
}



function mountain_range(width, height, scaleX, tx, ty, background_color, draw_tree)
{
  push();

    translate(tx, ty);

      push();
        scale(scaleX,1); //scale horizontally to reduce mountain range function frequency, 
                            //so that repeating patterns won't be noticed
              for (i = -width; i < width; i+=0.1)
              {
                stroke(background_color);

                raise = sin(i* .1840) + 
                        sin(i* .1900) + 
                        sin(i* .1960) +  
                        sin(i)* .2020 //self-made magic noise number for mountain range
         
                raise *= 30 ; 

                line(i, height/2 + raise, i, height);
              }
      pop();

    if (draw_tree != 0) //use a number argument       
      for (i = -width; i < width; i+= random(3,10))
      {
            tree_sx=random(0.75, 1.25)
            tree_sy=random(0.5, 1.5)

                raise = sin(i* .1840) + 
                        sin(i* .1900) + 
                        sin(i* .1960) +  
                        sin(i)* .2020 //self-made magic noise number for mountain range
     
            raise *= 30 ; 

            tree(i*scaleX, raise - height/25, tree_sx, tree_sy); //match the tree translate x with the mountain range scale x. 
      }

  pop();

}


// ###################################################################################################
// ###################################################################################################
// ###################################################################################################
function setup()
{
    createCanvas(1280, 720);
    midH = height/2

    colorMode(RGB, 1);


    color_gradient(width, height, 40)



    star(1280, 400)



    mountain_range(width, height, 100, 250, 30, 0.8, 0)

    mountain_range(width, height, 100, 50, 20, 0.5, 0)

    mountain_range(width, height, 100, 350, 80, 0.4, 0) //scaleX, tx, ty, color, alpha, draw_tree

    mountain_range(width, height, 50, 350, 150, 0.2, 1) 

    mountain_range(width, height, 30, -500, 300, 0.1, 1)

}

