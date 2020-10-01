//reference: https://www.youtube.com/watch?v=v7yyZZjF1z4&t=77s


var wall_num = 0

var floor_num

var squares = []

var wallCount

var size = 10

var floorPercent;

var runTimes = 0;

var coord = {}

var regionsNum = 0


function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1)

    background(0)

    // for (var a = 0; a < 100; a += 1)// run the entire thing many times until white floor's percentage is high enough
    // {
    //     floor_num = 0

    //     runTimes += 1

        coord = getCoord();



        for (var i = 0; i < 4; i++)
        {
            SmoothMap();
        }



        ProcessMap()


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

        //floorPercent = floor_num/(60*60 - 60* 4 + 4)


    //     if (floorPercent > 0.4) //manually adjusting the qualified percentage here

    //     {
    //         print(floor_num)

    //         print(runTimes) // how many attempts until find a satisfactory result

    //         break
    //     }
    // }

}



//------------------------------------------------------------------------------------
function ProcessMap()//check if certain wall regions are too small
    {
        var wallRegions = GetRegions(1); //1 stands for walls. Get all the wall regions.

        var wallThresholdSize = 100;

        wallRegions.forEach(wallRegion=>
        {   
            if (wallRegion.length < wallThresholdSize)
            {
                wallRegion.forEach(tile=>
                {
                    (coord[tile.tileX]||[])[tile.tileY] = 0;          
                })

            }    

        })



        // var roomRegions = GetRegions(0); //1 stands for walls. Get all the wall regions.

        // var roomThresholdSize = 50;

        // foreach (var roomRegion in roomRegions)
        // {
        //     if (roomRegion.length < roomThresholdSize)
        //     {
        //         foreach (var tile in roomRegion)
        //         {
        //             map[tile.tileX][tile.tileY] = 1; //set it to black wall
        //         }
        //     }
        // }

    }


function GetRegions(tileType)
{
    var regions = [[]];

    var mapFlags = {}

    for (var x = 0; x < width;  x += size)
    {
        for (var y = 0; y < height; y += size)
        {
        	//print((mapFlags[x]||[])[y])


            if ((mapFlags[x]||[])[y] == 0 && (coord[x]||[])[y] == tileType)
            {
                var newRegion = GetRegionTiles(x, y);

                regions.push(newRegion);

                newRegion.forEach(function(tile)
                {
                    (mapFlags[tile.tileX]||[])[tile.tileY] = 1;
                }
                )

            }
        }
    }

    //print(regionsNum)
    return regions;
}



function GetRegionTiles(startX, startY)
{
    var tiles = []

    var mapFlags = {}

    var tileType = (coord[startX]||[])[startY]

    var queue = []
    queue.push(new Grid(startX, startY))

    if(!mapFlags[x]) mapFlags[x] = [];
    (mapFlags[startX]||[])[startY] = 1

    while(queue.length > 0)
    {
        var tile = queue.shift()
        tiles.push(tile)

        //print(tile.tileX)

        for (var x = tile.tileX - size; x <= tile.tileX + size; x += size)
        {//print("hidshgo")
            for (var y = tile.tileY - size; y <= tile.tileY + size; y += size)
            { 
            	print((mapFlags[x]||[])[y])
            	

                if (IsOnCanvas(x,  y) && (y == tile.tileY || x == tile.tileX))//dont check diagonal tiles
                {
                    if ( (mapFlags[x]||[])[y] == 0 && (coord[x]||[])[y] == tileType ) ////here 0 is white floor
                    {
                       (mapFlags[x]||[])[y] = 1;//1 means already looked at.

                        queue.Enqueue(new Grid(x, y));

                        
                    }
                }
            }
        }        
    }


    //print(tiles)
    return tiles
}







function getCoord()
{
  coord = {}

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
            if (IsOnCanvas(neighborX, neighborY))
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

        if (neighborWallTiles > 0.5 * 8)       coord[i][j]  = 1;
        else if (neighborWallTiles < 0.5 * 8)  coord[i][j]  = 0;

    }

  }
}

function Grid(x, y)
{
    this.tileX = x
    this.tileY = y


    this.OneGrid = function()
    {
	    this.tileX = x
	    this.tileY = y
    }
}





function IsOnCanvas(x, y)
{
    return x >= 0 && x < width && y >= 0 && y < height
}