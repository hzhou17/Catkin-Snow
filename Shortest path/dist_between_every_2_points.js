var circleArray = []

var locX, locY

var radius = 20

var coord = []


function setup()
{
    createCanvas(600, 600)
    colorMode(RGB, 1)
    background(0.5)

    for (var i = 0; i < 6; i++)
    {
        locX = random(width - 2 * radius)
        locY = random(height - 2 * radius)

        var circle = new Circle(locX, locY)

        circleArray.push(circle)

        coord.push([locX, locY])

    }



    coord.forEach(x => print(x)) //get [x, y] for each point


    coord.forEach(x => 
    {
    	coord.forEach(y => 
    	{

    	})
    })





}



function draw()
{
    background(0.5)

    for (var i = 0; i < circleArray.length; i++)
    {
        circleArray[i].show()


        for (var j = 0; j < circleArray.length; j++)
        {
        	var d = (circleArray[i].x - circleArray[j].x) ** 2 + (circleArray[i].y - circleArray[j].x) ** y 

        	if (d == 0)
        	{
        		circleArray.splice(j, 1)
        	}
        }

    }














}

class Circle
{
    constructor(locX, locY)
    {
        this.x = locX
        this.y = locY
    }

    show()
    {
        ellipse(this.x, this.y, radius, radius)
    }

}
