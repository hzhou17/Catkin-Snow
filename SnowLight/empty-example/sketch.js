var flakes00 = [];
var flakes01 = [];
var flakes02 = [];
var flakes03 = [];
var flakes04 = [];



function color_gradient(thickness) // height and width of the canvas. 
{                            //thickness of a subdivision. The thinner, the smoother.
    let range = height //life up the canvas by 200

    for (i = 0; i < range; i+= thickness)
    {
      var new_color = map(i, 0, range, 0.5, 0);

      push();
                                                         //Finer sky color adjustment
        fill(new_color - 0.3, new_color - 0.1, new_color + 0.3); //for the blue background 
        noStroke()                                               
        rect(0, i, width, thickness);

      pop();
    }
}


// #################################################################
// #################################################################
// #################################################################
function setup()
{
   noCursor()

  createCanvas(1280, 720);

  colorMode(RGB, 1);

  color_gradient(1)




  for (var i = 0; i < 500; i++)
  {
    flakes00[i] = new Flake00();
  }

  for (var i = 0; i < 500; i++)
  {
    flakes01[i] = new Flake01();
  }

  for (var i = 0; i < 300; i++)
  {
    flakes02[i] = new Flake02();
  }

  for (var i = 0; i < 200; i++)
  {
    flakes03[i] = new Flake03();
  }

  for (var i = 0; i < 100; i++)
  {
    flakes04[i] = new Flake04();
  }

}


function draw()
{

  color_gradient(1)


pole_faceRight(-400, 0, 1, 1)    //(tx, ty, sx, sy)


push()   //mirror the light pole
translate(width/2, 0)
scale(-1, 1)
pole_faceRight(-1000, 0, 1, 1)  
pop()



//pole_faceLeft(200, 0, 1, 1)


  noStroke();


    for (var i = 0; i < flakes00.length; i++)
    {
      flakes00[i].fall();
      flakes00[i].show();
    }

    for (var i = 0; i < flakes01.length; i++)
    {
      flakes01[i].fall();
      flakes01[i].show();
    }


    for (var i = 0; i < flakes02.length; i++)
    {
      flakes02[i].fall();
      flakes02[i].show();
    }

    for (var i = 0; i < flakes03.length; i++)
    {
      flakes03[i].fall();
      flakes03[i].show();
    }

    for (var i = 0; i < flakes04.length; i++)
    {
      flakes04[i].fall();
      flakes04[i].show();
    }


}


// ################################################################
// ################################################################
// ################################################################



// function horizon()
// {
//   triangle(0, height*0.75, 0, height, width*0.6, height);

//   // triangle()
// }

