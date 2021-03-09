function fish(x1,y1,eyeX, eyeY)
{
  //fin
  strokeWeight(1.5);
  fill(0.9)
  beginShape();
    curveVertex(21+x1-60+2+50, 60+y1-60+3-8);
    curveVertex(21+x1-60+2+50, 60+y1-60+3-8);

    curveVertex(x1-65+50, y1+18-8);

    curveVertex(50+x1-60-50+8+45, 46+y1-50+2.5-8)
    
    curveVertex(68+x1-60-80+10+50, y1-17-8);


    curveVertex(21+x1-60+2+50, 40+y1-45+3-8);
    curveVertex(21+x1-60+2+50, 40+y1-45+3-8)
  endShape();

  
//tail
  strokeWeight(1.5);
  fill(0.9)
  beginShape();
    curveVertex(21+x1-60+2, 60+y1-60+3);
    curveVertex(21+x1-60+2, 60+y1-60+3);

    curveVertex(x1-65, y1+18);

    curveVertex(50+x1-60-50+8, 46+y1-50+2.5)
    
    curveVertex(68+x1-60-80+10, y1-17);


    curveVertex(21+x1-60+2, 40+y1-45+3);
    curveVertex(21+x1-60+2, 40+y1-45+3)
  endShape();


  //body
  strokeWeight(0);
  fill(0.8)
  ellipse(x1+0.5,y1,80,30)


  fill(0.1, 0.25, 0.8)
  ellipse(x1,y1,76,28)
  

 
  //stripes
  fill(0.88, 0.15, 0.24)
  strokeWeight(0)
  ellipse(x1,y1+8,50,8)

  //irre
  fill(0.6, 0.9, 0.96)
  strokeWeight(0)
  ellipse(x1+11,y1-1,20,5)


  //mouth
  strokeWeight(1.5)
  stroke(1)
  noFill()
  curve(x1+45,y1-20-7,x1+34,y1+5,x1+24,y1+3,x1+29,y1-7)


  //eyes white
  strokeWeight(0)
  fill(1)
  ellipse(x1+25,y1-5,7,6)
  
  //eyeball
  fill(0)
  ellipse(x1+25+eyeX ,y1-5+eyeY, 3, 3)
}