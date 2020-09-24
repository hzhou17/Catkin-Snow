//reference: https://www.youtube.com/watch?v=v7yyZZjF1z4&t=77s


var wall_num = 0

var tile_num = 0

var squares = []

var wallCount

var size = 10

var grid = []

var current, next


function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1)

    background(0)

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
        if (i == 0 || i == 600 - size ||
            j == 0 || j == 600 - size)
        {
            coord[i][j] = 0
        }

          if (coord[i][j] == 0) fill(0)
          else fill(1)



          var cell = new Cell(i, j);
        grid.push(cell);
      }
    }



    current = grid[1];



}


function draw()
{
    for (let i = 0; i < grid.length; i++)
    {
        grid[i].show();
    }

    current.visited = true;

    let next = current.CheckNeighbors()

    if (next)
    {
        next.visited = true;
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

function index(i, j)
{
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1)
    {
        return -1;
    }

    return i + j * cols;
}
