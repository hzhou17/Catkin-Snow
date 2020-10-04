var squares = []

//var locX, locY

var radius = 20

var size = 20

var mousePosX
var mousePosY

var colorRed

var region = []

var clickIndex
var clickX, clickY

function setup()
{
    let canvas = createCanvas(600, 600)
    canvas.position(5,0)
    colorMode(RGB, 1)
    background(0.5)

    colorRed = color(1, 0, 0)

    for (var i = 0; i < width; i += size)
    {
        for (var j = 0; j < height; j += size)
        {
            var square = new Square(i, j)

            squares.push(square)
        }
    }

    for (var i = 0; i < squares.length; i++)
    {
        squares[i].color() //have a separate function to set color at start
    }

}

function draw()
{
    //background(0.5)

    for (var i = 0; i < squares.length; i++)
    {
        squares[i].show()
    }






}


class Square
{
    constructor(locX, locY)
    {
        this.x = locX
        this.y = locY
    }


    color()
    {
        if (this.x == 100 || this.x == 400 || this.y == 100 || this.y ==400)
        {
            this.color = 0
        }
        else
        {
            this.color = 1
        }
    }



    show()
    {


        fill(this.color)

        rect(this.x, this.y, size, size)
    }
}


function mousePressed()
{

//-----------get the index of the one that's clicked
    mousePosX = floor(mouseX/size)
    mousePosY = floor(mouseY/size)

    // print(mousePosX)
    // print(mousePosY)

    for (var i = 0; i < squares.length; i++)
    {
        if (squares[i].color != 0)
        {
            if (squares[i].x/size == mousePosX && squares[i].y/size == mousePosY)
            {

                clickIndex = i

                clickX = squares[clickIndex].x
                clickY = squares[clickIndex].y

                squares[clickIndex].color = colorRed
            }
        }
    }
//--------------------------------------------
//expand with the one click on as the center
    for (var neighborX = clickX - size; neighborX <= clickX + size; neighborX += size )
    {
        for (var neighborY = clickY - size; neighborY <= clickY + size; neighborY += size )
        {
            if (neighborX == clickX || neighborY == clickY)//at least one equals. (to get rid of diagnol ones)
            {
                region.push([neighborX, neighborY])

            }
        }
    }


print(region)

}
//note to self: need to convert this to seb lague's map[, ] method
