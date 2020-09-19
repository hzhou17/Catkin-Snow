var size = 20

var myRadius = 25

var sides = 6


function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1)

    background(.3, .56, .73)


    window.coord = getCoord()


	for (var i = 0; i < 2; i++)
	    {
	        SmoothMap();
	    }



    for (var i = 0; i < width; i += size) //same for-loop to re-creat the [i, j] coordinates, so that I can access the pre-defined the 0 or 1 values.
    {
      for (var j = 0; j < height; j += size)
      {

		if (j % (2 * size) == 0) //offset by a radius every other row
		{
			halfCircle(size, 2 * i, j, coord[i][j])
		}
		else
		{
			halfCircle(size, 2 * i + size, j, coord[i][j])
		}






      }
    }



	// for (var i = 0; i < width/myRadius; i++)
	// {
	// 	for (var j = 0; j <= height/myRadius; j++)
	// 	{
	// 		push()
	// 			stroke(0)
	// 			strokeWeight(2)
	// 			fill(.3, .56, .73)

	// 			translate( i * 2 * myRadius , j * (myRadius +1.5) )

	// 			if (j % 2 == 1) //offset by a radius every other row
	// 			{
	// 				translate(myRadius, 0)
	// 			}

	// 			halfCircle(myRadius)

	// 		pop()
	// 	}
	// }

    //saveCanvas('myCanvas', 'png');
}



function halfCircle(radius, x_offset, y_offset, color) //drawing halfCircle with polar coordinates
{
	push()

		translate(x_offset, y_offset) 

		rotate(-PI/2)

		fill(color)

	    beginShape()

		    for (var angle = 0; angle < PI; angle += 0.1)
		    {
		    	var r = radius
		    	var x = r * cos(angle)
		    	var y = r * sin(angle)

		    	vertex(x, y)
		    }

		endShape()

	pop()
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