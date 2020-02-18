
var array = []


var snow = []
// #################################################################
// #################################################################
// #################################################################
function setup()
{


  createCanvas(400, 400);

  colorMode(RGB, 1);

  fill(0)
  // stroke(1)

  // for (var x = 0; x < width; x+= 100)
  // { 
  //     array[x] = []

  //     for (var y = 0; y < height; y+= 100)
  //     {   
  //       array[x][y] = (x, y);
  //     }
  // }

    for (var i = 0; i < 400; i++)
  {
    snow[i] = new Snow();
  }


}

function draw()
{
  background(0.5)

    for ( var i = 0; i< array.length; i+= 100) 
  {
      for (var j = 0; j < array.length; j+= 100)

      {
        circle(i, j, 50, 50)
      }


  }








  



}

