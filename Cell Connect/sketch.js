
let cells = []
let points = []

function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1);

    background(0)


    for (let i = 0; i < width; i += width/3) 
    {
        for (let j = 0; j < height; j += height/3)
        {
            
            cells.push(new Cell(i, j))

            var pointX = random(i, i + width/3)
            var pointY = random(j, j + height/3)

            points.push([pointX, pointY])
        }


    }

    for (let i = 0; i < cells.length; i++) 
    {

        cells[i].show();



    }


}


function draw()
{


    strokeWeight(10)
 




    for (let i = 0; i < cells.length; i++) 
    {


        point(points[i][0], points[i][1])

    }

}