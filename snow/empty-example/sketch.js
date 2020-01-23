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

var len = 2;
var wid = 12;
var wid = 12;

function bunch01()
{
  // size = random(7)
      for(var i = 0; i < len; i++)
    {
         for(var j = 0; j < wid; j++)
         {
            push();
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
    rotate(-PI/18);
    branch(6, branch_up1_len/2);

    rotate(-PI/20);
    branch(6, branch_up1_len/4);

  //set a small branch for catkin
    push();

      rotate(PI/1.8);
      branch(5, branch_small_len/3);
      rotate(PI/8.5);

      fill(.25, 0.65, 0.33, 1.);
      translate(-8, 0);
      branch(20, branch_small_len + 30);////catkin

      // bump(3, 3, 3);

    pop();

    rotate(PI/12);
    branch(5, branch_up2_len);

  //set a small branch for catkin
    push();
      rotate(PI/2);
      branch(5, branch_small_len/3);

      rotate(PI/11);

      fill(.15, 0.8, 0.3, 1.);
      translate(-8, 0);
      branch(20, branch_small_len + 30);////catkin

      // Stroke(1.0);
      bunch01(10,20);

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

  rotate(PI/5);
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

function catkin(thick, len)
{
  rect(0, 0, thick, -len);
  translate(0, -len);
}


function setup() {
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
}

function draw() {
  // background(0., 0.65, 0.8);
  // background(0.3);
    b1 = color(255);
    b2 = color(0);
setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);


  fill(1.);
  for (var i = 0; i < flakes01.length; i++)
  {
    flakes01[i].fall();
    flakes01[i].show();
  }


  stroke(0.2, 0.1, 0.1, 1.);
  fill(.35, 0.2, 0.1, 1.);

  push()
    translate(0, height/2.4);
    rotate(PI/2.3);


    branch(9, base_branch_len);

    branch_upper();

    branch_lower();

  pop()

  fill(1)
  noStroke();
  for (var i = 0; i < flakes02.length; i++)
  {

    flakes02[i].fall();
    flakes02[i].show();
  }
}


function Flake01()
{
    this.x = random(width + 400);
    this.y = random(-height-200, -50);
    this.yspeed  = 1.;
    this.xspeed  = -.25;

    this.size = random(3,6);

    this.fall = function()
    {
        this.y += this.yspeed;
        this.x += this.xspeed;

        if(this.y > height)
        {
            this.y = random(-height-200, -50)
        }

        if(this.x < 0)
        {
            this.x = random(width + 400);
        }

    }

    this.show = function()
    {
        circle(this.x, this.y, this.size);
    }

}

function Flake02()
{
    this.x = random(width + 400)
    this.y = random(-height-200, -50);
    this.yspeed  = 1.5;
    this.xspeed  = -.75;

    this.size = random(4, 7);

    this.fall = function()
    {
        this.y += this.yspeed;
        this.x += this.xspeed;

        if(this.x < 0)
        {
            this.x = random(width + 400)
        }

        if(this.y > height)
        {
            this.y = random(-height-200, -50)
        }
    }

    this.show = function()
    {
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