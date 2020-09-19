function oneScale(radius, x_offset, y_offset, color) //drawing halfCircle with polar coordinates
{
    tileLayer.push()

        tileLayer.translate(x_offset, y_offset)

        if (color) tileLayer.fill(1)
        if (color) tileLayer.fill(0.9, 0.1, 0.1)


        tileLayer.beginShape()

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
    fishBackground.push();

        fishBackground.translate(width/2, height/2 + 125);
        fishBackground.scale(0.7);

        fishBackground.beginShape();

            fishBackground.curveVertex(0, 250);
            fishBackground.curveVertex(0, 250);
                  fishBackground.curveVertex(40, 230);
                          fishBackground.curveVertex(75, 150);

                                  fishBackground.curveVertex(112, -90); //right, widest, belly
                             //curveVertex(110, 0);   //head
                                                      fishBackground.curveVertex(70, -400);

                                                              fishBackground.curveVertex(tail[0], tail[1]); //furthest, tail

                                                      fishBackground.curveVertex(-70, -400);
                             //curveVertex(-110, 0);
                                 fishBackground.curveVertex(-112, -90);  //left, widest, belly

                          fishBackground.curveVertex(-75, 150);
                  fishBackground.curveVertex(-40, 230);

            fishBackground.curveVertex(0, 250);
            fishBackground.curveVertex(0, 250);

        fishBackground.endShape();

    fishBackground.pop();









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


