class Grid
{
    constructor()
    {
        this.gridSize = 10

        this.coord = this.GetCoord()
    }


    oneGrid(tX, tY, size, color)
    {
        //fill(random(1))
        rect(tX, tY, size, size)

    }


    GetCoord() //creates grid coordinates and assign each grid with a value of 0 or 1.
    {
      let coord = {}

      for (var i = 0; i < width; i += this.gridSize)
      {
        coord[i] = {}

        for (var j = 0; j < height; j += this.gridSize)
        {
          if (Math.random() > 0.5) coord[i][j] = 0
          else coord[i][j] = 1
        }
      }

      return coord
    }


    GetSurrondingWallCount(gridX, gridY)// 0 is black, 1 is white. wallCount here is white count.
    {
        var wallCount = 0;

        for (var neighborX = gridX - this.gridSize; neighborX <= gridX + this.gridSize; neighborX += this.gridSize)
        {
            for (var neighborY = gridY - this.gridSize; neighborY <= gridY + this.gridSize; neighborY += this.gridSize)
            {
                if (neighborX >= 0 && neighborX < width && neighborY >= 0 && neighborY < height) //the center grid can't be on the edge, because it is the center of a 3*3 grid
                {
                    if (neighborX != gridX || neighborY != gridY) //if it is not itself, the center one in 3*3 grid.
                    {
                        wallCount += this.coord[neighborX][neighborY]
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


    SmoothMap()
    {
      for (var i = 0; i < width; i += this.gridSize)
      {
        for (var j = 0; j < height; j += this.gridSize)
        {
            var neighborWallCount = this.GetSurrondingWallCount(i, j);

            if (neighborWallCount > 4) this.coord[i][j]  = 1;
            else if (neighborWallCount < 4)
                this.coord[i][j]  = 0;
        }

      }
    }



    show()
    {
        for (var i = 0; i < 1; i++)
        {
            this.SmoothMap();
        }


        for (var i = 0; i < width; i += this.gridSize) //same for-loop to re-creat the [i, j] coordinates, so that I can access the pre-defined the 0 or 1 values.
        {
            for (var j = 0; j <= height; j += this.gridSize)
            {
                if (i == 0 || i == 600 - size ||
                    j == 0 || j == 600 - size)
                {
                    this.coord[i][j] = 0
                }

                if (this.coord[i][j] == 0) fill(0)
                else fill(1)


                this.oneGrid(i, j, this.gridSize, this.coord[i][j])

                //print(this.GetSurrondingWallCount(i, j))
            }
        }

    }

}
