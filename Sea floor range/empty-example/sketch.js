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
    let range = height //life up the canvas by 200

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





function mountain_range(scaleX, tx, ty, background_color, layer_scale)
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

                raise = sin(i * .1840) + 
                        sin(i * .1900) + 
                        sin(i * .1960) +  
                        sin(i )* .2020 //self-made magic noise number for mountain range
         
                raise *= 30 ; 

                line(i+frameCount/30, height/2 + raise, i, height);
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
    img = createCanvas(window.innerWidth, window.innerHeight);
     // = height/2

    colorMode(RGB, 1);


    color_gradient(40)


    // star(3840, 400)

  // let yellow1 = color(0.58, 0.41, 0.17);
  // let yellow2 = color(0.65, 0.46, 0.23);
  // let yellow3 = color(0.73, 0.55, 0.3);
  // let yellow4 = color(0.73, 0.61, 0.41);
  // let yellow5 = color(0.75, 0.65, 0.45);
  // let yellow1 = color(0.58, 0.41, 0.17);


    // fill(0.2, 0.5, 0.2)
    // // mountain_range(100, 500, 300, 0.8, 0)

    // scale(0.3, 0.3)
    // translate(0, 1000)
    // mountain_range(120, 250 + frameCount/30, 180, yellow5, 0)


    // mountain_range(100, 350, 400, yellow3, 1, 0.7) //scaleX, tx, ty, color, alpha, draw_tree

    // mountain_range(60, 350, 650, yellow2, 1 , 0.8)

    // mountain_range(100, 1200, 1000, yellow1, 1, 1)


}


function draw()
{

  let yellow1 = color(0.58, 0.41, 0.17);
  let yellow2 = color(0.65, 0.46, 0.23);
  let yellow3 = color(0.73, 0.55, 0.3);
  let yellow4 = color(0.73, 0.61, 0.41);
  let yellow5 = color(0.75, 0.65, 0.45);
  // let yellow1 = color(0.58, 0.41, 0.17);


    fill(0.2, 0.5, 0.2)
    // mountain_range(100, 500, 300, 0.8, 0)

    scale(0.3, 0.3)
    translate(0, 1000)
    mountain_range(120, 250 , 180, yellow5, 0)

//print(frameCount)

}
