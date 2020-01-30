const X_AXIS = 2;
const Y_AXIS = 1;

var flakes01 = [];
var flakes02 = [];

var base_branch_len = 300;
var branch_up1_len = 300;
var branch_up2_len = 150;
var branch_down1_len = 125;
var branch_down2_len = 200;

var branch_small_len = 100;

var len = 3;
var wid = 0;

let black, white, blueColor;

var timer;

var springTime = 400;

var alphaAdjust;

var current_len_01, current_len_02, current_len_03,
    current_len_04,current_len_05, current_len_06;



function bunch01()
{
  // size = random(7)
      for(var i = 0; i < len; i++)
    {
         for(var j = 0; j < wid; j++)
         {

            push();
            translate(12, 0);
            rotate(PI)
            translate(8*i , 10*j);
            translate(10*noise(i, j), 10*noise(i, j))
            ellipse(0, 0, 5, 2);
            pop();
         }

    }
}
function branch_upper()
{
  push();
    rotate(PI/25);
    branch(6, branch_up1_len/2);

    rotate(-PI/20);
    branch(6, branch_up1_len/4);

  //set a small branch for catkin

    push();

      rotate(PI/1.8);

  //growth
      // ellipse(0, 0, 4, current_len_01)
      branch(4, current_len_01);

      rotate(PI/8.5-PI/25);


      fill(.25, 0.65, 0.33, 1.);
      translate(-8, 0);

      bunch01();////catkin

    pop();

    rotate(PI/12);
    branch(5, branch_up2_len);

  //set a small branch for catkin
    push();
      rotate(PI/2);
      branch(5, branch_small_len/3);

      rotate(PI/11);

      fill(.15, 0.8, 0.3, 1.);
      // translate(-8, 0);

      noStroke();


      bunch01();  ////catkin

    pop();

    rotate(PI/8);
    branch(4, branch_up2_len * 0.8);

  //set a small branch for catkin
    push();
      rotate(PI/2.5);
      branch(5, branch_small_len/4);

      rotate(PI/16);

      fill(.15, 0.8, 0.3, 1.);
      translate(-8, 0);
      branch(20, branch_small_len + 30);////catkin

      pop();

    rotate(PI/8);
      branch(4, branch_up2_len * 0.2);

      //set a small branch for catkin
      push();
      rotate(PI/3);
      branch(5, branch_small_len/5);

      // rotate(PI/20);

      fill(.15, 0.8, 0.3, 1.);
      translate(-8, 0);
      branch(20, branch_small_len + 30);////catkin

    pop();

    rotate(PI/8);
    branch(4, branch_up2_len * 0.01);
  pop();
}

function branch_lower()
{
  push();

  rotate(PI/3.5);
  branch(6, branch_down1_len);

  rotate(-PI/15);
  branch(6, branch_down2_len);

  rotate(-PI/15);
  branch(5, branch_down2_len);

  pop();
}

function branch(thick, len)
{
  rect(0, 0, thick, -len);
  translate(0, -len);
}

// #################################################################
function setup()
{
  frameRate(24);

  createCanvas(1280, 720);

  colorMode(RGB, 1);


  for (var i = 0; i < 350; i++)
  {
    flakes01[i] = new Flake01();
  }

  for (var i = 0; i < 250; i++)
  {
    flakes02[i] = new Flake02();
  }

  white = color(1);
  black = color(0);
  blueColor = color(0.3, 0.5, 0.7);
  range = 0;
  timer = 0;

  alphaAdjust = 0;
  current_len_01 = 0;
  current_len_02 = 0;
  current_len_03 = 0;
  current_len_04 = 0;
  current_len_05 = 0;
  current_len_06 = 0;
}

function draw()
{
  // print(wid);


  timer += 1;

  colorTrans = lerpColor(black, blueColor, range);

  background(colorTrans);


  setGradient(0, 200, width, height, colorTrans, white, Y_AXIS);


  if (timer > 50)
  {
    range += 0.01;
    alphaAdjust -= 0.008;
  }

 if (timer > 50)
 {
    if (current_len_01 < 25) current_len_01 += 1;
    if (current_len_02 < 100) current_len_02 += 1;

    if (current_len_03 < 30) current_len_03 += 1;
    if (current_len_04 < 30) current_len_04 += 1;

    if (current_len_05 < 30) current_len_05 += 1;
    if (current_len_06 < 30) current_len_06 += 1;

    if (wid < 13) wid += 0.1;
 }











  noStroke();

  for (var i = 0; i < flakes01.length; i++)
  {
    flakes01[i].fall();
    flakes01[i].show();
  }


  stroke(0.2, 0.1, 0.1, 1.);
  fill(.35, 0.2, 0.1, 1.);

  push()
    translate(0, height/2.5);

    rotate(PI/2.2);
    branch(9, base_branch_len/1.75);

    rotate(-PI/12);
    branch(7.5, base_branch_len/3);

    branch_upper();

    branch_lower();

  pop()

  fill(1, 1, 1, 1 + alphaAdjust);
  noStroke();
  for (var i = 0; i < flakes02.length; i++)
  {
    flakes02[i].fall();
    flakes02[i].show();
  }



}


function Flake01()
{
    this.x = random(0, width + 400);
    this.y = random(-height, -50);
    this.yspeed  = 1.5;
    this.xspeed  = -.5;

    this.size = random(2,5);

    this.colorAlpha = random(1);

    this.fall = function()
    {
        this.y += this.yspeed;
        this.x += this.xspeed;

        if((this.y > height) && (timer < 200))
        {
            this.y = random(-height, -50)
        }

        if(this.x < 0)
        {
            this.x = random(width + 400);
        }

    }

    this.show = function()
    {
        fill(1., 1., 1., this.colorAlpha + alphaAdjust);
        circle(this.x, this.y, this.size);
    }


}

function Flake02()
{
    this.x = random(width + 400)
    this.y = random(-height-200, -50);
    this.yspeed  = 2.75;
    this.xspeed  = -1.25;

    this.size = random(4, 7);

    this.colorAlpha = random(0.3, 1);  //Fluffy alphaAdjust

    this.gravity = 0.002;

    this.fall = function()
    {
        this.y += this.yspeed;
        this.x += this.xspeed;

        this.yspeed += this.gravity;

        if(this.x < 0)
        {
            this.x = random(width + 400);
        }

        if(this.y > height)
        {
            this.y = random(-height-200, -50);
            this.yspeed = 1.5;
            //this.yspeed = 0; fluffy flow feel. very fall straight down
        }
    }

    this.show = function()
    {
        fill(1., 1., 1., this.colorAlpha + alphaAdjust);
        circle(this.x, this.y, this.size);
    }
}

function setGradient(x, y, w, h, c1, c2, axis)
 {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
