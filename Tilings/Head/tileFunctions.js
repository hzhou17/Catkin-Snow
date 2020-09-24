function oneScale(radius, x_offset, y_offset, color) //drawing halfCircle with polar coordinates
{
    tileLayer.push()

        tileLayer.translate(x_offset, y_offset)


        if (color) tileLayer.fill(1)
        if (color) tileLayer.fill(0.9, 0.1, 0.1)

        if (y_offset < 120 || y_offset > 565 || x_offset < 220 || x_offset > 380)
        {
          tileLayer.noStroke() //body has stoke, head no stroke.
        }


        else
        {
          tileLayer.stroke(0, 0.075)
        }

        tileLayer.beginShape()

        tileLayer.rotate(PI/2)//!!!!!!!!!!!!!!

            for (var angle = 0; angle < PI/2; angle += 0.1) //top one forth circle
            {
                var r = size + 1
                var x = r * cos(angle)
                var y = r * sin(angle)

                tileLayer.vertex(x - r + 0.5 , y - r)
            }

            for (var angle = -PI/2; angle < 0; angle += 0.1) //bottom one forth circle
            {
                var r = size + 1
                var x = r * cos(angle)
                var y = r * sin(angle)

                tileLayer.vertex(x - r + 1  , y + r)
            }

        tileLayer.endShape()

        tileLayer.beginShape()
            for (var angle = -PI/2; angle < PI/2; angle += 0.1)
            {
                var r = size
                var x = r * cos(angle)
                var y = r * sin(angle)

                tileLayer.vertex(x, y)
            }
        tileLayer.endShape()

    tileLayer.pop()
}



function getCoord() //creates grid coordinates and assign each grid with a value of 0 or 1.
{
  let coord = {}

  for (var i = 0; i < width; i += size)
  {
    coord[i] = {}

    for (var j = 0; j < height; j += size)
    {
      if (Math.random() > 0.5) coord[i][j] = 0
      else coord[i][j] = 1
    }
  }

  return coord
}


function GetSurrondingWallCount(gridX, gridY)
{
    wallCount = 0;

    for (var neighborX = gridX - size; neighborX <= gridX + size; neighborX += size)
    {
        for (var neighborY = gridY - size; neighborY <= gridY + size; neighborY += size)
        {
            if (neighborX >= 0 && neighborX < width && neighborY >= 0 && neighborY < height) //the center grid can't be on the edge, because it is the center of a 3*3 grid
            {
                if (neighborX != gridX || neighborY != gridY) //if it is not itself, the center one in 3*3 grid.
                {
                    wallCount += coord[neighborX][neighborY]
                }
            }
            else //if this is around the edge, encourage the growth of walls
            {
                wallCount++;
            }
        }
    }

    return wallCount
}


function SmoothMap()
{
  for (var i = 0; i < width; i += size)
  {
    for (var j = 0; j < height; j += size)
    {
        var neighborWallCount = GetSurrondingWallCount(i, j);

        if (neighborWallCount > 4) coord[i][j]  = 1;
        else if (neighborWallCount < 4)
            coord[i][j]  = 0;
    }

  }
}


var tail = [0, -620]


function KoiShape()
{
    fishLayer.push();

        fishLayer.translate(width/2, height/2 + 155);
        fishLayer.scale(0.7);

        fishLayer.beginShape();

            fishLayer.curveVertex(0, 55);
            fishLayer.curveVertex(0, 55);
                  fishLayer.curveVertex(80, 30);
                          //fishLayer.curveVertex(77, 0);

                                  fishLayer.curveVertex(118, -50); //right, widest, belly
                             //curveVertex(110, 0);   //head
                                                      fishLayer.curveVertex(70, -400);

                                                              fishLayer.curveVertex(tail[0], tail[1]); //furthest, tail

                                                      fishLayer.curveVertex(-70, -400);
                             //curveVertex(-110, 0);
                                 fishLayer.curveVertex(-118, -50);  //left, widest, belly

                          //fishLayer.curveVertex(-77, 0);
                  fishLayer.curveVertex(-80, 30);

            fishLayer.curveVertex(0, 55);
            fishLayer.curveVertex(0, 55);

        fishLayer.endShape();

    fishLayer.pop();
}

function HeadShape()
{
    fishLayer.push();

        fishLayer.translate(width/2, height/2 + 155);
        fishLayer.scale(0.68, 0.72);

        fishLayer.stroke(0)
        fishLayer.strokeWeight(5)

        fishLayer.beginShape();

            fishLayer.curveVertex(0, 265);
            fishLayer.curveVertex(0, 265);
                  fishLayer.curveVertex(45, 240);

                      fishLayer.curveVertex(90, 135);


                          fishLayer.curveVertex(110, 40);



                                    fishLayer.curveVertex(60, 55);

                                           fishLayer.curveVertex(0, 65);

                                    fishLayer.curveVertex(-60, 55);

                              //fishLayer.curveVertex(-90, 50);

                          fishLayer.curveVertex(-110, 40);

                      fishLayer.curveVertex(-90, 135);

                  fishLayer.curveVertex(-45, 240);

            fishLayer.curveVertex(0, 265);
            fishLayer.curveVertex(0, 265);

        fishLayer.endShape();



    fishLayer.pop();
}


function FinShape()
{
    fishLayer.push();

        fishLayer.translate(width/2, height/2 + 155);
        fishLayer.scale(0.68, 0.72);

        fishLayer.stroke(0)
        fishLayer.strokeWeight(5)

        fishLayer.beginShape();//left part

            fishLayer.curveVertex(-130, -35);
            fishLayer.curveVertex(-130, -35);

            fishLayer.curveVertex(-200, -20);

            fishLayer.curveVertex(-210, 25);

            fishLayer.curveVertex(-120, 75);


            fishLayer.curveVertex(-130, -35);


        fishLayer.endShape();


        fishLayer.beginShape();//right part

            fishLayer.curveVertex(130, -35);
            fishLayer.curveVertex(130, -35);

            fishLayer.curveVertex(200, -20);

            fishLayer.curveVertex(210, 25);

            fishLayer.curveVertex(120, 75);


            fishLayer.curveVertex(130, -35);


        fishLayer.endShape();



    fishLayer.pop();
}

function TaleShape()
{
    fishLayer.push();

        fishLayer.translate(width/2, height/2 + 150);
        fishLayer.scale(0.68, 0.72);

        fishLayer.stroke(0)
        fishLayer.strokeWeight(5)

        fishLayer.beginShape();//left part

            fishLayer.curveVertex(40, -720);
            fishLayer.curveVertex(40, -720);

            fishLayer.curveVertex(47, -700);

            fishLayer.curveVertex(42, -655);

            //fishLayer.curveVertex(70, -600);



            fishLayer.curveVertex(0, -600);

            fishLayer.curveVertex(10, -680);


            fishLayer.curveVertex(40, -720);
            fishLayer.curveVertex(40, -720);

        fishLayer.endShape();





    fishLayer.pop();
}




// function oneScale(radius, x_offset, y_offset, color) //drawing halfCircle with polar coordinates
// {
//     push()
//         translate(x_offset, y_offset)

//         //rotate(-PI/2)
//         if (color == 1) fill(1)
//         if (color == 0) fill(0.9, 0.1, 0.1)


//         beginShape()

//             for (var angle = 0; angle < PI/2; angle += 0.1) //top one forth circle
//             {
//                 var r = radius + 1
//                 var x = r * cos(angle)
//                 var y = r * sin(angle)

//                 vertex(x - r + 0.5 , y - r)
//             }

//             for (var angle = -PI/2; angle < 0; angle += 0.1) //bottom one forth circle
//             {
//                 var r = radius + 1
//                 var x = r * cos(angle)
//                 var y = r * sin(angle)

//                 vertex(x - r + 1  , y + r)
//             }

//         endShape()

//         beginShape()
//             for (var angle = -PI/2; angle < PI/2; angle += 0.1)
//             {
//                 var r = radius
//                 var x = r * cos(angle)
//                 var y = r * sin(angle)

//                 vertex(x, y)
//             }
//         endShape()

//     pop()
// }


// function halfCircle(radius, x_offset, y_offset, color) //drawing halfCircle with polar coordinates
// {
//  push()

//      translate(x_offset, y_offset)

//      rotate(-PI/2)

//      fill(color)

//      beginShape()

//          for (var angle = 0; angle < PI; angle += 0.1)
//          {
//              var r = radius
//              var x = r * cos(angle)
//              var y = r * sin(angle)

//              vertex(x, y)
//          }

//      endShape()

//  pop()
// }


