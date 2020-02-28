let img


const X_AXIS = 2;
const Y_AXIS = 1;

var flakes01 = [];
var flakes02 = [];
var flakes03 = [];
var flakes04 = [];


let black, white, blueColor;

var timer;

var springTime = 300;

var alphaAdjust;




var furAlpha;


function setGradient(x, y, w, h, c1, c2, axis) //from Processing Example
 {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i+=0.5) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i+=0.5) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}







// #################################################################
// #################################################################
// #################################################################
function setup()
{


  createCanvas(1280, 720);

  colorMode(RGB, 1);

  for (var i = 0; i < 400; i++)
  {
    flakes01[i] = new Flake01();
  }

  for (var i = 0; i < 300; i++)
  {
    flakes02[i] = new Flake02();
  }

  for (var i = 0; i < 150; i++)
  {
    flakes03[i] = new Flake03();
  }


  for (var i = 0; i < 200; i++)
  {
    flakes04[i] = new Flake04();
  }


  white = color(0.95);
  black = color(0);
  blueColor = color(0.3, 0.5, 0.8);
  range = 0;
  timer = 0;

  alphaAdjust = 0;



  furAlpha = 0;

  bar = 100;
}


function draw()
{
  // print (height/2-50)
  // print(PI/6)
  

  timer += 1;

  colorTrans = lerpColor(black, blueColor, range);

  background(colorTrans);


  setGradient(0, 100, width, height, colorTrans, white, Y_AXIS);

  // setGradient(0, 0, width / 2, height, white, blueColor, X_AXIS);





  noStroke();



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

    for (var i = 0; i < flakes04.length; i++)
    {
      flakes04[i].fall();
      flakes04[i].show();
    }



    // for (var i = 0; i < flakes03.length; i++)
    // {
    //   flakes03[i].fall();
    //   flakes03[i].show();
    // }
}


// ################################################################
// ################################################################
// ################################################################



function horizon()
{
  triangle(0, height*0.75, 0, height, width*0.6, height);

  // triangle()
}

