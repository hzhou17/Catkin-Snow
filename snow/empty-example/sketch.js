let img

var bar;



var flakes01 = [];
var flakes02 = [];
var flakes03 = [];
var flakes04 = [];


let black, white, blueColor;

var timer;

var springTime = 300;

var alphaAdjust;



var furAlpha;


function color_gradient(thickness) // height and width of the canvas. 
{                            //thickness of a subdivision. The thinner, the smoother.
    let range = height - 200 //life up the canvas by 200

    for (i = 0; i < range; i+= thickness)
    {
      var new_color = remap(0, i, range, 0, 0.7);

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
  frameRate(24);

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

  white = color(0.95);
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

  len_01 = 0;
  len_02 = 0;
  len_03 = 0;
  len_04 = 0;
  len_05 = 0;

  len_tri1   = 0;
  len_tri2   = 0;
  len_tri3   = 0;
  len_tri4   = 0;

  rotateDegree1 = 0;
  rotateDegree2 = 0;
  rotateDegree3 = 0;
  rotateDegree4 = 0;  
  rotateDegree5 = 0;  


  rotateRight1 = 1;
  rotateRight2 = 1;
  rotateRight3 = 1;
  rotateRight4 = 1;
  rotateRight5 = 1;


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

  if ((timer > springTime) && (timer < 450))
  {
    range += 0.01;
    if (alphaAdjust >= -1) alphaAdjust -= 0.008;

  }

 if (timer > springTime + 50)
 {
    if (bar > 50) bar -=1;


    if (current_len_01 < 25)  current_len_01 += 0.6;
    if (current_len_02 < 100) current_len_02 += 1;



    if (current_len_05 < 30) current_len_05 += 1;
    if (current_len_06 < 30) current_len_06 += 1;

    // if (wid < 13) wid += 0.1;
 }

 if (timer > springTime + 80)

{
    if (current_len_03 < 150) current_len_03 += 1.2;
    if (current_len_04 < 150) current_len_04 += 1.4;
}


 if (timer > springTime + 120)

{
    if (len_tri1 < 4) len_tri1 += random(0.1)*3;
    // if (current_len_04 < 150) current_len_04 += 1;
}



if (timer > springTime + 140)
{

  for (var i = 0; i < 100; i++)
  {
    if (len_01 < 26) len_01 += noise(i)/700;
  }

  for (var i = 0; i < 250; i++)
  {
    if (len_02 < 26) len_02 += noise(i)/800;
  }

}

if (timer > springTime + 150)
{

  if (len_01 < 26) len_01 += random(0.1, 0.3);
  if (len_02 < 26) len_02 += random(0.3);
  if (len_03 < 26) len_03 += random(0.3);


  if (len_tri3 < 4) len_tri3 += random(0.1)*3;
}


if (timer > springTime + 150)
{
  if (len_04 < 26) len_04 += random(0.1, 0.4);
  if (len_05 < 26) len_05 += random(0.05, 0.35);
}


if (timer > springTime + 220)
{
    if (len_tri2 < 4) len_tri2 += random(0.2);

}


if (timer > springTime + 250)
{
    if (len_tri4 < 4) len_tri4 += random(0.2);

}


if (timer > springTime + 260)
{

    if ((rotateDegree1 > 2.5 ) || (rotateDegree1 < -2.5))
    {
        // rotateDegree = 0;
        rotateRight1 *= -1
    }


    for (var i = 50; i < 150; i++)
    {
          rotateDegree1 += rotateRight1 * noise(i)/1000;
    }

}

if (timer > springTime + 270)
{

    if ((rotateDegree2 > 2.75 ) || (rotateDegree2 < -2.75))
    {
        // rotateDegree = 0;
        rotateRight2 *= -1
    }


    for (var i = 100; i < 200; i++)
    {
          rotateDegree2 += rotateRight2 * noise(i)/1000;
    }

}

if (timer > springTime + 270)
{

    if ((rotateDegree3 > 2.75 ) || (rotateDegree3 < -2.75))
    {
        // rotateDegree = 0;
        rotateRight3 *= -1
    }


    for (var i = 10; i < 110; i++)
    {
          rotateDegree3 += rotateRight3 * noise(i)/1000;
    }

}

if (timer > springTime + 270)
{

    if ((rotateDegree4 > 2.75 ) || (rotateDegree4 < -2.75))
    {
        // rotateDegree = 0;
        rotateRight4 *= -1
    }


    for (var i = 0; i < 100; i++)
    {
          rotateDegree4 += rotateRight4 * noise(i)/1000;
    }

}

if (timer > springTime + 300)
{

    if ((rotateDegree5 > 2.75 ) || (rotateDegree5 < -2.75))
    {
        // rotateDegree = 0;
        rotateRight5 *= -1
    }


    for (var i = 0; i < 100; i++)
    {
          rotateDegree5 += rotateRight5 * noise(i)/1000;
    }

}


if (timer > springTime + 280)
{
  if (furAlpha < 0.55) furAlpha+=0.01;
  if (alphaAdjust <= 0) alphaAdjust+= 0.005;
}


  noStroke();

  if (timer < 420)
  {
    for (var i = 0; i < flakes01.length; i++)
    {
      flakes01[i].fall();
      flakes01[i].show();
    }
  }

  push()
      stroke(0.2, 0.1, 0.1, 0.5);
      fill(.35, 0.2, 0.1, 0.8);
      branch_base()
      branch_lower();
  pop()



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






  fill(1, 1, 1, 1 + alphaAdjust);
  noStroke();

    if (timer < 420)
  {
    for (var i = 0; i < flakes02.length; i++)
    {
      flakes02[i].fall();
      flakes02[i].show();
    }
  }



  if (timer > 600)
  {
    for (var i = 0; i < flakes03.length; i++)
    {
      flakes03[i].fall();
      flakes03[i].show();
    }
  }
  // rect(width/2, height/2+50, 50, 50)
}


// ################################################################
// ################################################################
// ################################################################



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

                          rotate(radians(rotateDegree1));

            catkin1(); //////////////
            ////////////////////////////

                          fill(1, 1, 1, furAlpha)
                          stroke(1,1,1, furAlpha - 0.2)
                          strokeWeight( 1)
                          // noStroke()

                          white_Fur(18, -16, 32, 7, 1.5, -2.75);///fur left


                          white_Fur(0, -16, 32, 7, 1.5, 4);///fur right



        pop()
        

        branch(4, (current_len_01 + 5));



        rotate(PI/5);



                          rotate(radians(rotateDegree2) );


        catkin1(); //////////////
        ////////////////////////////

                          fill(1, 1, 1, furAlpha)
                          stroke(1,1,1, furAlpha - 0.2)
                          strokeWeight( 1)
                          // noStroke()

                          white_Fur(18, -16, 32, 7, 1.5, -2.75);///fur


                          white_Fur(0, -16, 32, 7, 1.5, 4);///fur

    pop();

    rotate(PI/20);
    branch(7, branch_up2_len/1.7);



  //set a small branch for catkin
    push();

        fill(.43, 0.4, 0.31, 1.); ///////light color
        rotate(PI/3);
        branch(5, current_len_02/2.5);

        rotate(PI/5.25);
                         rotate(radians(rotateDegree3)); 

        catkin2(); //////////////
        ////////////////////////////
                                                          fill(1, 1, 1, furAlpha)
                          stroke(1,1,1, furAlpha - 0.2)
                          strokeWeight( 1)
                          // noStroke()

                          // bunch02(18, -16, 2, 32, 7, 1.5);///fur


                          white_Fur(0, -16, 32, 7, 1.5, 4);///fur






        translate(15, 15)

                          rotate(radians(rotateDegree4));
        catkin2(); //////////////
        ////////////////////////////
                                                    fill(1, 1, 1, furAlpha)
                          stroke(1,1,1, furAlpha - 0.2)
                          strokeWeight( 1)
                          // noStroke()

                          white_Fur(18, -16, 32, 7, 1.5, -2.75);///fur


                          white_Fur(0, -16, 32, 7, 1.5, 4);///fur


    pop();

    rotate(-PI/100);
    branch(7, branch_up2_len * 0.85);



    rotate(PI/5);
    fill(.43, 0.4, 0.31, 1.);
    branch(6, current_len_04 * 0.6);

    push();


        fill(.15, 0.8, 0.3, 1.);
        rotate(PI/3);
        translate(-8, 0);

                          rotate(radians(rotateDegree1));
        catkin4()

                                                            fill(1, 1, 1, furAlpha)
                          stroke(1,1,1, furAlpha - 0.2)
                          strokeWeight( 1)
                          // noStroke()

                          white_Fur(18, -16, 32, 7, 1.5, -2.75);///fur


                          white_Fur(0, -16, 32, 7, 1.5, 4);///fur

        translate(30, 15)

                          rotate(radians(rotateDegree5));
        catkin5()
                                                                fill(1, 1, 1, furAlpha)
                          stroke(1,1,1, furAlpha - 0.2)
                          strokeWeight( 1)
                          // noStroke()

                          white_Fur(18, -16, 32, 7, 1.5, -2.75);///fur


                          white_Fur(0, -16, 32, 7, 1.5, 4);///fur


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


function catkin1()
{   
    push()    
        fill(.15, 0.45, 0.25, 1.0);
        noStroke();
        // stroke(1,1,1,.4);
        translate(-8, 0);

        push()
          tri(28, -17, len_tri1, 25, 7, 4);
        pop()

        push()
          rotate(PI)
          tri2(0, 237, len_tri2, 25, 7, 4);
        pop()

        noStroke();
        // stroke(1,1,1,.2)
        // strokeWeight(2);
        rect_Dots(22, -16, 3, len_01, 7, 4, 8, 12);////catkin

        fill(.2, 0.55, 0.3, 1.0);
        noStroke();
        rect_Dots(22, -13, 3, len_01, 6, 4, 8, 12);////catkin

        fill(.15, 0.7, 0.3, 1.);
        // stroke(0,0,0,.4);
        // strokeWeight(1);
        noStroke();
        rect_Dots(25, -12, 4, len_01, 5, 3, 8, 12);//light
    pop()
}

function catkin2()
{   
    push()    
        fill(.2, 0.45, 0.3, 1.0);
        stroke(1,1,1,.2);
        translate(-8, 0);

        push()
          tri(25, -17, len_tri1, 25, 7, 4);
        pop()

        push()
          rotate(PI)
          tri2(0, 237, len_tri2, 25, 5, 4);
        pop()

        noStroke();
        rect_Dots(22, -16, 3, len_02, 7, 4, 8, 12);////catkin

        fill(.2, 0.55, 0.3, 1.0);
        noStroke();
        rect_Dots(22, -13, 3, len_02, 6, 4, 8, 12);////catkin

        fill(.15, 0.7, 0.3, 1.);
        noStroke();
        rect_Dots(25, -12, 3, len_02, 5, 3, 8, 12);//light
    pop()
}
function catkin3()
{   
    push()    
        fill(.2, 0.45, 0.3, 1.0);
        stroke(1,1,1,.2);
        translate(-8, 0);

        push()
          tri(25, -15, len_tri1, 25, 7, 4);
        pop()

        push()
          rotate(PI)
          tri2(0, 237, len_tri2, 25, 5, 4);
        pop()

        noStroke();
        rect_Dots(22, -16, 3, len_03, 7, 4, 8, 12);////catkin

        fill(.2, 0.55, 0.3, 1.0);
        noStroke();
        rect_Dots(22, -13, 3, len_03, 6, 4, 8, 12);////catkin

        fill(.15, 0.7, 0.3, 1.);
        noStroke();
        rect_Dots(25, -12, 3, len_03, 5, 3, 8, 12);//light
    pop()
}
function catkin4()
{   
    push()    
        fill(.2, 0.45, 0.3, 1.0);
        stroke(1,1,1,.2);
        translate(-8, 0);

        push()
          tri(28, -17, len_tri3, 25, 7, 4);
        pop()

        push()
          rotate(PI)
          tri2(0, 237, len_tri4, 25, 5, 4); //bottom
        pop()

        noStroke();
        rect_Dots(22, -16, 3, len_04, 7, 4, 8, 12);////catkin

        fill(.2, 0.55, 0.3, 1.0);
        noStroke();
        rect_Dots(22, -13, 3, len_04, 6, 4, 8, 12);////catkin

        fill(.15, 0.7, 0.3, 1.);
        noStroke();
        rect_Dots(25, -12, 3, len_04, 5, 3, 8, 12);//light
    pop()
}
function catkin5()
{   
    push()    
        fill(.2, 0.45, 0.3, 1.0);
        stroke(1,1,1,.2);
        translate(-8, 0);

        push()
          tri(25, -17, len_tri3, 25, 7, 4);
        pop()

        push()
          rotate(PI)
          tri2(0, 237, len_tri4, 25, 5, 4); //bottom
        pop()

        noStroke();
        rect_Dots(22, -16, 3, len_05, 7, 4, 8, 12);////catkin

        fill(.2, 0.55, 0.3, 1.0);
        noStroke();
        rect_Dots(22, -13, 3, len_05, 6, 4, 8, 12);////catkin

        fill(.15, 0.7, 0.3, 1.);
        noStroke();
        rect_Dots(25, -12, 3, len_05, 5, 3, 8, 12);//light
    pop()
}