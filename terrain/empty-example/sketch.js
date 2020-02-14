var cols, rows;
var my_scale = 20;
var w = 1600;
var h = 800;

var noiseScale = 0.2


var terrain = []
// #################################################################
// #################################################################
// #################################################################
function setup()
{
  frameRate(24);

  createCanvas(800, 800, WEBGL);

  colorMode(RGB, 1);


  cols = w/my_scale;
  rows = h/my_scale;

  for (var x = 0; x < cols; x++)
  { 
    terrain[x] = []

      for (var y = 0; y < rows; y++)
      {   
        terrain[x][y] = 
        map(noise(x * noiseScale, y* noiseScale), 0, 1, -100, 100)
      }
  }

  print(terrain)

}


function draw()
{
  background(0)

  translate(width/2, height/2)
  rotateX(PI/3)

  translate(-w/2, -h/2)

  stroke(1)
  noFill()


  for (var y = 0; y < cols; y++)
  { 
    beginShape(TRIANGLE_STRIP)

      for (var x = 0; x < rows; x++)
      {   
         vertex(x*my_scale, y*my_scale, terrain[x][y])
         vertex(x*my_scale, (y+1)*my_scale, terrain[x][y])
      }

    endShape()
  }




}


// ################################################################
// ################################################################
// ################################################################
