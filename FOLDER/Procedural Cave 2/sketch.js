var wall_num = 0

var tile_num = 0

var squares = []

var wallCount

var size = 10



//window.coord = [, ]


function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1)

    background(0)

    //noStroke()

    window.coord = getCoord();


    for (var i = 0; i < 4; i++)
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




          if (coord[i][j] == 0) fill(0)
          else fill(1)

          print(coord[i][j])  //这里就都是0

          rect(i, j, size, size)
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

        if (neighborWallTiles > 4) coord[i][j]  = 1;
        else if (neighborWallTiles < 4)
            coord[i][j]  = 0;
    }

  }
}


// function GenerateMap()
// {
//   RandomFillMap()

// }


// function RandomFillMap()
// {
//   for (var i = 0; i < width; i += size)
//   {
//     for (var j = 0; i < height; j += size)
//     {
//         if (i == 0 || i == width - size ||
//             j == 0 || j == height - size)
//         {
//             coord[i, j] = 0
//         }

//         else
//         {
//           if (Math.random() > 0.5) coord[i, j] = 0
//           else coord[i, j] = 1
//         }
//     }
//   }
// }

// function DrawSquares()
// {
//     for (var i = 0; i < width; i += size)
//     {
//       for (var j = 0; i < height; j += size)
//       {
//         if (coord[i, j] == 0) fill(0)
//         else fill(1)


//         rect(i, j, size, size)

//       }
//     }
// }
