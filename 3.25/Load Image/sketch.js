let img;
function preload() {
  img = loadImage('DSC01359.jpg');
}
function setup() {
  createCanvas(4000, 5000);	
  image(img, 0, 0);
}




// let bg;
// let y = 0;

// function setup() {
//   // The background image must be the same size as the parameters
//   // into the createCanvas() method. In this program, the size of
//   // the image is 720x400 pixels.
//   bg = loadImage('DSC01359.jpg');
//   createCanvas(720, 400);
// }

// function draw() {
//   background(bg);

//   stroke(226, 204, 0);
//   line(0, y, width, y);

//   y++;
//   if (y > height) {
//     y = 0;
//   }
// }