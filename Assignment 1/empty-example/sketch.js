var base_branch_len = 150;
var branch_up1_len = 300;
var branch_up2_len = 150;
var branch_down1_len = 125;
var branch_down2_len = 200;
var branch_small_len = 100;



function setup() 
{
  createCanvas(1280, 720);

  colorMode(RGB, 1);

}


function draw() 
{
  background(0.3);
  noStroke(); //no stroke for moon and horizon line

  fill(0.2, 0.3, 0.9); //blue background
  rect(0,0, width, height-200);  //horizon


  fill(0.9, 0.8, 0.2); //Moon
  
  push();

  translate(1050,100);
  rotate(-PI/4);
  circle(0,0, 100);

  fill(0.2, 0.3, 0.9); //Mask the yellow with a blue circle
  circle(25, 0, 100);

  pop();



  fill(.35, 0.2, 0.1, 1.); //Branch brown
  stroke(0,0,0);           //Add outline
  strokeWeight(2);

  translate(width/2, height); //place the tree in the center bottom

  // branch(thickness, length);
  rect(0, 0, 9, -base_branch_len);
  translate(0, -base_branch_len);

  //Left branch!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  push();
  rotate(-PI/18);

  translate(0, -branch_up1_len/2);
  rect(0,0,6,branch_up1_len/2);

  rotate(-PI/20);


  translate(0, -branch_up1_len/4);
  rect(0,0,6,branch_up1_len/4);
//set a small branch for green
  push();

  rotate(-PI/1.8);

  translate(0, -branch_small_len/3);
  rect(0,0,5,branch_small_len/3);
  rotate(PI/4);

  fill(.25, 0.65, 0.33, 1.);
  translate(-8, 0);
////green
  translate(10, -branch_small_len+75);
  ellipse(0,0,20,branch_small_len-50);


  pop();

  rotate(PI/12);
  // branch(5, branch_up2_len);
  translate(0, -branch_up2_len);
  rect(0,0,5,branch_up2_len);

//set a small branch for green
  push();
  rotate(PI/2);
  // branch(5, branch_small_len/3);
  translate(0, -branch_small_len/3);
  rect(0,0,4,branch_small_len/3);

  rotate(-PI/8);

  fill(.15, 0.75, 0.3, 1.);
  translate(-8, 0);
////green
  translate(10, -branch_small_len+80);
  ellipse(0,0,17,branch_small_len-55);

  pop();

  rotate(PI/8);

  translate(0, -branch_up2_len * 0.8);
  rect(0,0,5,branch_up2_len * 0.8);

//set a small branch for green
  push();
  rotate(-PI/1.5);

  translate(0, -branch_small_len/4);
  rect(0,0,4,branch_small_len/4);

  rotate(PI/4);

  fill(.15, 0.7, 0.3, 1.);
  translate(-8, 0);
////green
  translate(12, -branch_small_len + 85);
  ellipse(0,0,12,branch_small_len - 60);

  pop();

  rotate(PI/8);

  translate(0, -branch_up2_len * 0.2);
  rect(0,0,4,branch_up2_len * 0.2);

  //set a small branch for green
  push();
  rotate(PI/8);

  translate(0, -branch_small_len/5);
  rect(0,0,3,branch_small_len/5);  


  fill(.15, 0.85, 0.3, 1.);
  translate(-8, 0);
////green
  translate(10, -branch_small_len + 100);
  ellipse(0,0,8,branch_small_len - 80); 
  pop();

  rotate(PI/8);

  translate(0, -branch_up2_len * 0.01);
  rect(0,0,4,branch_up2_len * 0.01);  
  pop();


  // ////////////////////branch_right();
  push();

  rotate(PI/5);

  translate(0, -branch_down1_len);
  rect(0,0,6,branch_down1_len);  

  rotate(-PI/15);

  translate(0, -branch_down2_len);
  rect(0,0,5,branch_down2_len); 

  rotate(-PI/15);
  translate(0, -branch_down2_len/2);
  rect(0,0,4,branch_down2_len/2); 

  rotate(-PI/20);
  translate(0, -branch_down2_len/3);
  rect(0,0,3,branch_down2_len/3); 

  pop();

}

