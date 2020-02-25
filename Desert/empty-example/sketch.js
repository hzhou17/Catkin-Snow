var raise;
var tree_sx;
var tree_sy;

var trunk_len = 30

var img;


function remap(start, Value, end, newStart, newEnd)
{
    return  (newStart + (newEnd - newStart) * (Value - start)/(end - start))
}

function color_gradient(thickness) // height and width of the canvas. 
{                            //thickness of a subdivision. The thinner, the smoother.
    let range = height - 200 //life up the canvas by 200

    for (i = 0; i < range; i+= thickness)
    {
      var new_color = remap(0, i, range, 0.25, 0.5);

      push();
                                                         //Finer sky color adjustment
        fill(new_color + 0.4, new_color - 0.1, new_color + 0.1);
        // fill(new_color , 0.1, new_color );//red sky //for the blue background 
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

                circle(0, 0, noise(i)*10)
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

        strokeWeight(2)
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
              for (i = -width/2; i < width; i+=0.5)
              {
                stroke(background_color);
                // stroke(0.58, 0.41, 0.17);

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
    img = createCanvas(3840, 2160);
     // = height/2

    colorMode(RGB, 1);


    color_gradient(40)


    // star(3840, 400)

  let yellow1 = color(0.58, 0.41, 0.17);
  let yellow2 = color(0.65, 0.46, 0.23);
  let yellow3 = color(0.73, 0.55, 0.3);
  let yellow4 = color(0.73, 0.61, 0.41);
  let yellow5 = color(0.75, 0.65, 0.45);
  // let yellow1 = color(0.58, 0.41, 0.17);


    fill(0.2, 0.5, 0.2)
    // mountain_range(100, 500, 300, 0.8, 0)

    mountain_range(120, 250, 180, yellow5, 0)

    mountain_range(80, 550, 320, yellow4, 1, 0.6)

    mountain_range(100, 350, 400, yellow3, 1, 0.7) //scaleX, tx, ty, color, alpha, draw_tree

    mountain_range(60, 350, 650, yellow2, 1 , 0.8)

    mountain_range(100, 1200, 900, yellow1, 1, 1)

    //save(img)
// PCDCloud()
}
  