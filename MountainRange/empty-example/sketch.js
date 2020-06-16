var raise;
var tree_sx;
var tree_sy;

var trunk_len = 30


// var  = 0;

function remap(start, Value, end, newStart, newEnd)
{
    return  (newStart + (newEnd - newStart) * (Value - start)/(end - start))
}

function color_gradient(thickness) //thickness of a subdivision. The thinner, the smoother.
{                            
    for (i = 0; i < height; i+= thickness)
    {
      this.R = map(i, 0, height, 0.3, 0.1);
      this.G = map(i, 0, height, 0.5, 0.1);
      this.B = map(i, 0, height, 0.9, 0.1);

        fill(this.R, this.G, this.B); //purple

        noStroke()  

        rect(0, i, width, thickness);
    }
}

function star(len, wid) // double for loop with noise in x and y translation to scatter 
{                       //the stars in the night sky.
    push()
    rotate(PI/9)

      for(var i = 0; i < len; i += 100)
    {
         for(var j = 0; j < wid; j += 150)
         {
            push();

                noStroke();
                fill(1, 1, 0, random(0.5, 1))
                translate(i -450 , -300);

                translate(width * noise(i, j), height * noise(i, j))

                // circle(0, 0, noise(i)*3.5)
                ellipse(0, 0, noise(i)*2, noise(i)*2);

            pop();
         }
    }
    pop()
}



function tree(tx, ty, tree_sx, tree_sy)
{
    push()

        translate(0, height/2) //height/2 because mountain ranges also start there
        translate(tx, ty)
        scale(tree_sx, tree_sy)

        strokeWeight(1.5)
        rect(0, 0, 2.5, trunk_len) //tree trunk

        quad(- 10,   - 9, 
             + 10,   - 7, 
             + 18,   + 12, 
             - 18,   + 12)

        quad(- 7.5,   -20 - 5, 
             + 7.5,   -20 - 6, 
             + 15,    -20 + 10, 
             - 15,    -20 + 10)

        triangle(0,  - 20- 7.5 - 20, 
                0 -12 ,  - 20 - 8, 
                0 + 12,  - 20 - 8 + 2)

    pop()
}



function mountain_range(scaleX, tx, ty, background_color, draw_tree, layer_scale)
{
  push();

    translate(tx, ty);

      push();
        scale(scaleX,1); //scale horizontally to reduce mountain range function frequency, 
                            //so that repeating patterns won't be noticed
              for (i = -width/2; i < width; i+=0.1)
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

    // if (draw_tree != 0) //use a number argument       
    // {  for (i = -width/2; i < width; i+= 1)
    //   {
    //         tree_sx = random(0.5, 1.5) * layer_scale
    //         tree_sy = random(1, 1.5)  * layer_scale
    //         // tree_sx = 1
    //         // tree_sy = 1
    //             raise = sin(i* .1840) + 
    //                     sin(i* .1900) + 
    //                     sin(i* .1960) +  
    //                     sin(i)* .2020 //self-made magic noise number for mountain range
     
    //         raise *= 30 ; 

    //         tree(i * scaleX,  raise - trunk_len * tree_sy - 2, tree_sx, tree_sy); //match the tree translate x with the mountain range scale x. 
    //   }
    // }  
  pop();

}


// ###################################################################################################
// ###################################################################################################
// ###################################################################################################
function setup()
{
    let img = createCanvas(1280, 720);
     // = height/2


    colorMode(RGB, 1);


    color_gradient(0.5)



    //star(1280, 400)


    //fill(0.2, 0.5, 0.2)

    // mountain_range(100, 250, 30, 0.8, 0)

    // mountain_range(100, 50, 20, 0.5, 1, 0.6)

    // mountain_range(100, 350, 80, 0.4, 1, 0.7) //scaleX, tx, ty, color, alpha, draw_tree

    // mountain_range(50, 350, 150, 0.2, 1 , 0.8)

    // mountain_range(30, -500, 300, 0.1, 1, 1)



    //tree(width/2, 0, 3, 3)

    save(img);
    //save("mySVG.svg");
}

