let img


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

// var len = 3;
// var wid = 0;

let black, white, blueColor;

var timer;

var springTime = 400;

var alphaAdjust;

var current_len_01, current_len_02, current_len_03,
    current_len_04,current_len_05, current_len_06;

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



function bunch01(x, y, len, wid, sizeX, sizeY)
{
      for(var i = 0; i < len; i++)
    {
         for(var j = 0; j < wid; j++)
         {

            push();
            translate(x, y);
            rotate(PI)
            translate(6*i , 9.5*j);
            translate(8*noise(i, j), 9*noise(i, j))
            ellipse(0, 0, sizeX, sizeY);
            pop();
         }

    }
}

function tri(x, y, len, wid, sizeX, sizeY)
{
      for(var i = 0; i < len; i++)
    {
         for(var j = 0; j < i; j++)
         {

            push();
            translate(x, y);
            rotate(3*PI/4)
            translate(4*i , 4*j);
            translate(2*noise(i, j), 2*noise(i, j))
            ellipse(0, 0, sizeX, sizeY);
            pop();

         }
    }
}

function tri2(x, y, len, wid, sizeX, sizeY)
{
      for(var i = 0; i < len; i++)
    {
         for(var j = 0; j < i+1; j++)
         {

            push();
            translate(x, y);
            rotate(3*PI/4)
            translate(4*i , 4*j);
            translate(2*noise(i, j), 2*noise(i, j))
            ellipse(0, 0, sizeX, sizeY);
            pop();
         }
    }
}


function bunch02(x, y, len, wid, sizeX, sizeY)
{
      for(var i = 0; i < len; i++)
    {
         for(var j = 0; j < wid; j++)
         {

            push();
            
            translate(x, y);
            rotate(PI) 

            translate(6*i , 7*j);
            translate(10*noise(i, j), 10*noise(i, j))

            rotate(-PI/2.75 + noise(i, j) )

            ellipse(0, 0, sizeX, sizeY);
            pop();
         }

    }
}

function bunch03(x, y, len, wid, sizeX, sizeY)
{
      for(var i = 0; i < len; i++)
    {
         for(var j = 0; j < wid; j++)
         {

            push();
            
            translate(x, y);
            rotate(PI) 

            translate(6*i , 7*j);
            translate(10*noise(i, j), 10*noise(i, j))

            rotate(PI/4 + noise(i, j) )

            ellipse(0, 0, sizeX, sizeY);
            pop();
         }

    }
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

  white = color(0.9);
  black = color(0);
  blueColor = color(0.3, 0.5, 0.8);
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


  setGradient(0, 50, width, height, colorTrans, white, Y_AXIS);

  // setGradient(0, 0, width / 2, height, white, blueColor, X_AXIS);

  if (timer > 250)
  {
    range += 0.01;
    alphaAdjust -= 0.008;
  }

 if (timer > 50)
 {
    if (current_len_01 < 25)  current_len_01 += 1;
    if (current_len_02 < 100) current_len_02 += 1;

    if (current_len_03 < 30) current_len_03 += 1;
    if (current_len_04 < 30) current_len_04 += 1;

    if (current_len_05 < 30) current_len_05 += 1;
    if (current_len_06 < 30) current_len_06 += 1;

    // if (wid < 13) wid += 0.1;
 }

  horizon()



  noStroke();

  for (var i = 0; i < flakes01.length; i++)
  {
    flakes01[i].fall();
    flakes01[i].show();
  }






  push()

    stroke(0.2, 0.1, 0.1, 0.5);
    fill(.35, 0.2, 0.1, 0.8);
    // filter(BLUR, 3);
        branch_base()



    stroke(0.2, 0.1, 0.1, 0.8);
    fill(.35, 0.2, 0.1, 1.);

        branch_upper();

        // branch_lower();

  pop()


  push()
      stroke(0.2, 0.1, 0.1, 0.5);
      fill(.35, 0.2, 0.1, 0.8);
      branch_base()
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


// ################################################################
// ################################################################
// ################################################################
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

function edge()
{
    this.show = function()
    {
        
    }
}








function horizon()
{
  triangle(0, height*0.75, 0, height, width*0.6, height);

  // triangle()
}

function branch_base()
{

    translate(0, height/2.75);


    rotate(PI/1.7);
    branch(14, base_branch_len/2);

    // rotate(-PI/15);
    // branch(12, base_branch_len/4);

    rotate(-PI/12);
    branch(10, base_branch_len/4.5);

    rotate(-PI/10);
    branch(9, base_branch_len/4.5);

    // rotate(-PI/10);
    branch(8, base_branch_len/4.5);

}

function branch_upper()
{
  push();
    rotate(-PI/30);
    branch(7.5, branch_up1_len/2.5);

    rotate(PI/20);
    branch(7.5, branch_up1_len/4);



    // rotate(-PI/20);
    branch(7, branch_up2_len/2);

      //set a small branch for catkin

    push();

        fill(.43, 0.4, 0.31, 1.); ///////light branch
        rotate(PI/2.65);

        branch(4, (current_len_01 + 5)/2);

        push()
            rotate(PI/5);



            catkin(); //////////////
            ////////////////////////////

            fill(0, 0, 0, 1)
            strokeWeight(0.75)

            bunch02(18, -16, 1, 35, 7, 0.75);



        pop()
        

        branch(4, (current_len_01 + 5));



        rotate(PI/5);






        catkin(); //////////////
        ////////////////////////////

        fill(1, 1, 1, 0.8)
        strokeWeight(0.75)
        noStroke()

        bunch02(18, -16, 1, 35, 7, 1);


        bunch03(0, -16, 1, 35, 7, 1);

    pop();

    rotate(PI/20);
    branch(7, branch_up2_len/1.7);



  //set a small branch for catkin
    push();

        fill(.43, 0.4, 0.31, 1.); ///////light color
        rotate(PI/3);
        branch(5, branch_small_len/3);

        rotate(PI/11);

        catkin(); //////////////
        ////////////////////////////

    pop();

    rotate(-PI/100);
    branch(7, branch_up2_len * 0.85);



    rotate(PI/5);
    fill(.43, 0.4, 0.31, 1.);
    branch(6, branch_up2_len * 0.4);

    push();


        fill(.15, 0.8, 0.3, 1.);
        rotate(PI/3);
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
  branch(8, branch_down1_len/1.5);

  rotate(-PI/30);
  branch(8, branch_down1_len);

  rotate(-PI/15);
  branch(8, branch_down2_len);

  rotate(-PI/30);
  branch(7, branch_down2_len);

  rotate(-PI/25);
  branch(7, branch_down2_len/1.5);

  rotate(-PI/20);
  branch(7, branch_down2_len*2);

  pop();
}

function branch(thick, len)
{
  rect(0, 0, thick, -len);
  translate(0, -len);
}

function outline(x1, y1, x2, y2)
{
  line(x1, y1, x2, y2);
  line(x1, y1, -x2, y2);


}

function catkin()
{   
    push()    
        fill(.15, 0.45, 0.25, 1.0);
        stroke(1,1,1,.2);
        translate(-8, 0);

        push()
          tri(25, -15, 5, 25, 7, 4);
        pop()

        push()
          rotate(PI)
          tri2(0, 257, 4, 25, 7, 4);
        pop()

        noStroke();
        bunch01(22, -16, 3, 26, 7, 4);////catkin

        fill(.2, 0.55, 0.3, 1.0);
        noStroke();
        bunch01(22, -13, 3, 26, 6, 4);////catkin

        fill(.15, 0.8, 0.3, 1.);
        noStroke();
        bunch01(25, -12, 4, 26, 5, 3);//light
    pop()
}





