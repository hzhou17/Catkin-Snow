//reference: https://www.youtube.com/watch?v=v7yyZZjF1z4&t=77s
var wallCount

var size = 10

var whiteNum = 0;
var blackNum = 0;
var nonEdgeGridCount = 0;
var regionSize = 0

var current, next

function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1)

    background(0.5)

    //noStroke()

    window.coord = getCoord();


    for (var i = 0; i < 1; i++)
    {
        SmoothMap();
    }


    for (var i = 0; i < width; i += size)
    {
      for (var j = 0; j < height; j += size)
      {

        if (i == 0 || i == 600 - size || // if along the edge, make it a black wall
            j == 0 || j == 600 - size)
        {
            coord[i][j] = 0
        }

        if (i >= size && i < width - size && j >= size && j < height - size) //exclude the edge.
        {
            if (GetActualWallCount(i, j) >= 8) // if a grid's adjacent 8 grids are all white, make it white
            {
                coord[i][j] = 1
            }
            if (GetActualWallCount(i, j) == 0) // if a grid's adjacent 8 grids are all white, make it white
            {
                coord[i][j] = 0
            }
        }

          if (coord[i][j] == 0)
          {
            fill(0)
            blackNum +=1
          }
          else
          {
            fill(1)
            whiteNum +=1
          }
          //print(coord[i][j])

          rect(i, j, size, size)
      }
    }


    for (var i = size; i < width - size; i += size) //replacement color is white, 1. target color is 0.5 grey
    {
        for (var j = size; j < height - size; j += size)
        {
            //print(coord[i][j])
            if (coord[i][j] == 1)
{
            // else if (coord[i][j] != 0.5)

            // else
            {
                if (coord[i - size][j] == 1)
            {
                coord[i - size][j] = 0.5
                fill(1, 0 , 0)
                rect(i - size, j, size, size)

                regionSize += 1
            }
                if (coord[i + size][j] == 1)
            {
                coord[i - size][j] = 0.5
                fill(1, 0 , 0)
                rect(i + size, j, size, size)

                regionSize += 1
            }
                if (coord[i][j - size] == 1)
            {
                coord[i - size][j] = 0.5
                fill(1, 0 , 0)
                rect(i, j- size, size, size)

                regionSize += 1
            }

                if (coord[i][j + size] == 1)
            {
                coord[i - size][j] = 0.5
                fill(1, 0 , 0)
                rect(i, j + size, size, size)

                regionSize += 1
            }
            }
}






        }
    }







// print(["black: " + blackNum, "white: " + whiteNum])
// print(["black: " + blackNum/((width/size)**2),
//     "white: " + whiteNum/((width/size)**2)])

print(regionSize)
}

//------------------------------------------------------------------------------------


function getCoord()
{
  let coord = {}

  for (var i = 0; i < 600; i += size)
  {
    coord[i] = {}
    for (var j = 0; j < 600; j += size)
    {

        if (i == 0 || i == 600 - size ||
            j == 0 || j == 600 - size)
        {
            coord[i][j] = 0
        }

        else
        {
          if (Math.random() > 0.5) coord[i][j] = 0
          else coord[i][j] = 1
        }
    }
  }

  return coord
}


function GetSurrondingWallCount(gridX, gridY)// 0 is black, 1 is white. wallCount here is white count.
{
    wallCount = 0;

    for (var neighborX = gridX - size; neighborX <= gridX + size; neighborX += size)
    {
        for (var neighborY = gridY - size; neighborY <= gridY + size; neighborY += size)
        {
            if (neighborX >= 0 && neighborX < width && neighborY >= 0 && neighborY < height)
            {
                if (neighborX != gridX || neighborY != gridY)
                {
                    wallCount += coord[neighborX][neighborY]
                }
            }
            else
            {
                //if this is around the edge, encourage the growth of walls
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
        var neighborWallTiles = GetSurrondingWallCount(i, j);

        if (neighborWallTiles > 4) coord[i][j]  = 1;
        else if (neighborWallTiles < 4)
            coord[i][j]  = 0;
    }
  }
}

function GetActualWallCount(gridX, gridY)// 0 is black, 1 is white. wallCount here is white count.
{
    wallCount = 0;

    for (var neighborX = gridX - size; neighborX <= gridX + size; neighborX += size)
    {
        for (var neighborY = gridY - size; neighborY <= gridY + size; neighborY += size)
        {
            //if (neighborX >= 0 && neighborX < width && neighborY >= 0 && neighborY < height)
            {
                if (neighborX != gridX || neighborY != gridY)
                {
                    wallCount += coord[neighborX][neighborY]
                }
            }
        }
    }
    return wallCount
}


    // for (var i = size; i < width - size; i += size)
    // {
    //     for (var j = size; j < height - size; j += size)
    //     {
    //         //print(coord[i][j])
    //         if (coord[i][j] == 1)
    //         {
    //             if (coord[i - size][j] == 1 ||
    //                 coord[i + size][j] == 1 ||
    //                 coord[i][j - size] == 1 ||
    //                 coord[i][j + size] == 1 )
    //             {
    //                 regionSize += 1

    //                 fill(1, 0 , 0)
    //                 rect(i, j, size, size)
    //             }

    //             else break
    //         }
    //         else break
    //     }
    // }
