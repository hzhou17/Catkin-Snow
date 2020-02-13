var cols, rows;
var my_scale = 20;




// #################################################################
// #################################################################
// #################################################################
function setup()
{
  frameRate(24);

  createCanvas(1280, 720);

  colorMode(RGB, 1);

  var w = 600;
  var h = 600; 


  cols = w/my_scale;
  rows = h/my_scale;

}


function draw()
{
 

  background(0)

beginShape()
  for (var x = 0; x < cols; x++)
  {
      for (var y = 0; y < rows; y++)
      {   
         vertex(x*my_scale, y*my_scale)
         vertex(x*my_scale, (y+1)*my_scale)
      }
  }
endShape()



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