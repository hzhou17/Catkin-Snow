let img; // Declare variable 'img'.
var a, b;

function setup() 
{
  createCanvas(500, 500);



}

function draw() 
{
  background(0);

  let mouse = map(mouseX, 0, 500, 0.001, 0.05)
  let mouseColorX = map(mouseX, 0, 500, 0, 255)
  let mouseColorY = map(mouseY, 0, 500, 0, 255)

  img = createImage(500, 500);
  img.loadPixels();


  for (let x = 0; x < img.width; x++) 
  {
    for (let y = 0; y < img.height; y++) 
    {

      a = map(sin(0.05*x), -1, 1, 0, 255);

      b = map(sin(0.05*y), -1, 1, 0, 255);

      img.set(x, y, [mouseColorX, mouseColorY, x, a*b*mouse]);
    }
  }


  img.updatePixels();




  image(img, 0, 0);

  
}




// function setup() 
// {

//   createCanvas(500, 500);

//   line(30, 20, 85, 20);

// }