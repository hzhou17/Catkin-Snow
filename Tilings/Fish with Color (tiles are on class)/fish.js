class Fish
{
    constructor(x_off, y_off)
    {
        this.x = x_off
        this.y = y_off 
        this.fishLen = 100
        this.fishWid = 100


        this.scaleSize = 10


		this.coord = this.GetCoord()
    }

    swim()
    {
        this.x += 1
        this.y += 1  
    }

    oneScale(radius, x_offset, y_offset, color) //drawing halfCircle with polar coordinates
    {
        push()

            translate(x_offset, y_offset) 

            //rotate(-PI/2)
            if (color == 1) fill(1)
            if (color == 0) fill(0.9, 0.1, 0.1)


            beginShape()
                // for (var angle = -PI/2; angle < PI/2; angle += 0.1) //half circle
                // {
                //  var r = radius
                //  var x = r * cos(angle)
                //  var y = r * sin(angle)

                //  vertex(x, y)
                // }

                for (var angle = 0; angle < PI/2; angle += 0.1) //top one forth circle
                {
                    var r = radius + 1
                    var x = r * cos(angle)
                    var y = r * sin(angle)

                    vertex(x - r + 0.5 , y - r)
                }       

                for (var angle = -PI/2; angle < 0; angle += 0.1) //bottom one forth circle
                {
                    var r = radius + 1
                    var x = r * cos(angle)
                    var y = r * sin(angle)

                    vertex(x - r + 1  , y + r)
                }

            endShape()

            beginShape()
                for (var angle = -PI/2; angle < PI/2; angle += 0.1)
                {
                    var r = radius
                    var x = r * cos(angle)
                    var y = r * sin(angle)

                    vertex(x, y)
                }
            endShape()

        pop()

    }


    GetCoord() //creates grid coordinates and assign each grid with a value of 0 or 1.
    {
      let coord = {}

      for (var i = 0; i < width; i += this.scaleSize)
      {
        coord[i] = {}

        for (var j = 0; j < height; j += this.scaleSize)
        {
          if (Math.random() > 0.5) coord[i][j] = 0
          else coord[i][j] = 1
        }
      }

      return coord
    }


    GetSurrondingWallCount(gridX, gridY)
    {
        var wallCount = 0;

        for (var neighborX = gridX - this.scaleSize; neighborX <= gridX + this.scaleSize; neighborX += this.scaleSize)
        {
            for (var neighborY = gridY - this.scaleSize; neighborY <= gridY + this.scaleSize; neighborY += this.scaleSize)
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
      for (var i = 0; i < width; i += this.scaleSize)
      {
        for (var j = 0; j < height; j += this.scaleSize)
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
    	//ellipse(this.x, this.y, this.fishWid, this.fishLen)



        for (var i = 0; i < 1; i++)
        {
            this.SmoothMap();
        }


        for (var i = 0; i < width; i += this.scaleSize) //same for-loop to re-creat the [i, j] coordinates, so that I can access the pre-defined the 0 or 1 values.
        {
            for (var j = 0; j < height; j += this.scaleSize)
            {
            	//print([i, j])


            	//if (i >= this.x - this.fishWid && i <= this.x + this.fishWid && j >= this.y - this.fishLen && j <= this.y + this.fishLen)
            	//if (i >= 100 && i <= 200 && j >= 100 && j <= 200)
            	//if (Math.hypot((i - this.x), (j - this.y)) <=100) 
            	{
	                if (j % (2 * this.scaleSize) == 0) //offset by a radius every other row
                	{
                    	this.oneScale(this.scaleSize, 2 * i, j, this.coord[i][j]) //????? why 2 times
                	}
               		else
                	{
                    	this.oneScale(this.scaleSize, 2 * i + this.scaleSize, j, this.coord[i][j])
                	}
            	}
            	// else
            	// {
            	// 	this.oneScale(0, 2 * i, j, this.coord[i][j])
            	// }	

            }
        }

    }

}
