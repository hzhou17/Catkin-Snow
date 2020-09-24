//reference: https://www.youtube.com/watch?v=v7yyZZjF1z4&t=77s


var wall_num = 0

var floor_num

var squares = []

var wallCount

var size = 10

var floorPercent;

var runTimes = 0;


function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1)

    background(0)

    for (var a = 0; a < 100; a += 1)// run the entire thing many times until white floor's percentage is high enough
    {
        floor_num = 0

        runTimes += 1

        window.coord = getCoord();


        for (var i = 0; i < 2; i++)
        {
            SmoothMap();
        }


        for (var i = 0; i < width; i += size)
        {
            for (var j = 0; j < height; j += size)
            {
                if (i == 0 || i == 600 - size ||
                j == 0 || j == 600 - size)
                {
                    coord[i][j] = 0
                }

                if (coord[i][j] == 0)//0 is black wall
                {
                    fill(0)
                }
                else
                {
                    fill(1)
                    floor_num += 1
                }

                rect(i, j, size, size)
            }
        }

        floorPercent = floor_num/(60*60 - 60* 4 + 4)


        if (floorPercent > 0.4) //manually adjusting the qualified percentage here

        {
            print(floor_num)

            print(runTimes) // how many attempts until find a satisfactory result

            break
        }
    }

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


function GetSurrondingWallCount(gridX, gridY)
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

        if (neighborWallTiles > 0.5 * 8) coord[i][j]  = 1;
        else if (neighborWallTiles < 0.5 * 8)
            coord[i][j]  = 0;
    }

  }
}


