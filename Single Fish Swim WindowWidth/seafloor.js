function seaFloor1()
{
  push()
  stroke(0.8, 0.6, 0.3)
    
    for (let i=0; i<= width; i+=1)  
  {
    let sin_y = sin(i*0.3)


    let x = i
    let y = 20*sin_y

    line(x, y+height*0.80, x, y+height+50)

  }

  pop()
}




function seaFloor2()
{
  push()
  stroke(0.85, 0.75, 0.5)
    
  for (let i=0; i<= width; i+=1)  
  {
    let sin_y = sin(i*0.25)


    let x = i
    let y = 20*sin_y

    line(x, y+height*0.78, x, y+height*0.87)

  }

  pop()
}


function seaFloor3()
{
  push()
  stroke(0.85, 0.8, 0.75)
    
  for (let i=0; i<= width; i+=1)  
  {
    let sin_y = sin(i*0.25)


    let x = i
    let y = 20*sin_y

    line(x, y+height*0.7, x, y+height*0.78)

  }

  pop()
}

function color_gradient(thickness) // height and width of the canvas. 
{                            //thickness of a subdivision. The thinner, the smoother.
    let range = height - 150 //life up the canvas by 200

    for (i = 0; i < range; i+= thickness)
    {
      var new_color = map(i, 0, range, 0, 0.25);

      push();
                                                         //Finer sky color adjustment
        fill(new_color, new_color, new_color);
        // fill(new_color , 0.1, new_color );//red sky //for the blue background 
        noStroke()                                               
        rect(0, i, width, thickness);

      pop();
    }
}


function weed1()
{
   for (let i=0; i< 200/20; i+=1)
  {     
    let degree = (frameCount/60 + i) * 20

    fill(0.12, 0.5+i/50, 0.4)

    //let map_i = (i, 0, 10, 0, 1)

    ellipse(width/3+ 25 * sin(degree)*i/5 -10, height*0.69-25*i+5, 15 - i, 30 - 2*i)
  }
}

function weed2()
{
   for (let i=0; i< 200/8; i+=1)
  {     
    let degree = (frameCount/60 + i) * 20

    fill(0.12, 0.5+i/50, 0.44)

    ellipse(width/3+ 25 * cos(degree)*i/10-80, height*0.69-20*i, 25 - i, 45 - 2*i)
  }
}

function weed3()
{
   for (let i=0; i< 200/15; i+=1)
  {     
    let degree = (frameCount/60 + i) * 20

    fill(0.12, 0.55+i/50, 0.4)

    ellipse(width/3+ 25 * sin(degree)*i/10-40, height*0.69-25*i, 20 - 1.2*i, 45 - 2*i)
  }
}





// function weed4()
// {
//    for (let i=0; i< 200/20; i+=1)
//   {     
//     let degree = (frameCount/60 + i) * 20

//     fill(0.12, 0.66+i/50, 0.44)

//     ellipse(width/2+ 25 * cos(degree*1.5)-420, height-25*i-200-15, 15 - i, 30 - 2*i)
//   }
// }




