var wall_num = 0

var tile_num = 0

var squares = []

var size = 10

var wallCount

var coord = [,]

//var x_pos = 0, y_pos = 0

function setup()
{
  createCanvas(600, 600);
  colorMode(RGB, 1)

  background(0)

  noStroke()


  for (var i = 0; i < width/size; i++)
  {

    for (var j = 0; j < height/size; j++)
    {
       squares.push(new Square(size * i, size * j))

    }

  }

  print(squares.length)

  for (var i = 0; i < squares.length; i++)
  {
    squares[i].Decide_Wall()


    squares[i].GetSurrondingWallCount()
    //squares[i].SmoothMap()


    // if (coord[squares[i].x, squares[i].y] == 0) fill(0)
    // else fill(1)





    // if(squares[i].x == 0 || squares[i].x == width - squares[i].size ||
    //     squares[i].y == 0 || squares[i].y == height - squares[i].size)
    // {
    //     fill(0)
    // }



    squares[i].show()

    //print(    squares[i].wallCount)
  }






  // print(wall_num)

  // print(tile_num)



}
