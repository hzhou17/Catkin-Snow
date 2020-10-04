var bottomHeight //the height from center to bottom, which is shorter than radius
var sideLength

var radius = 30

var white, yellow, darkBlue, lightBlue

var lerpPercent = 0


function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1)

    background(0)

    white = color(1)
    yellow = color(1, 0.68, 0.29)
    darkBlue = color(0.27, 0.65, 0.76)
    lightBlue = color(0.01, 0.29, 0.48)


	bottomHeight = radius * sin(TWO_PI/6) 
	sideLength = radius * cos(TWO_PI/6) * 2
}


function draw()
{
	lerpPercent = sin(0.02* frameCount)


	for (var i = 0; i < width/(radius*3)+1; i++)
	{
		for (var j = 0; j <= height/(5*bottomHeight)+2; j++)
		{
			//print(i, j)

			push()

				fill(lerpColor(yellow, lightBlue, lerpPercent))///////////////////////////

				translate( i*(2 * radius + sideLength), j * (4*bottomHeight))

				Hexagon()

			pop()


			push()

				fill(lerpColor(white, darkBlue, lerpPercent))///////////////////////////

				translate(0, 2 * bottomHeight) //white is right below yellow by 2 * bottomHeight

				translate( i*(2 * radius + sideLength), j * (4*bottomHeight))

				Hexagon()

			pop()

			push()

				fill(lerpColor(lightBlue, yellow, lerpPercent))///////////////////////////

				translate(1.5 * radius, bottomHeight)

				translate( i*(2 * radius + sideLength), j * (4*bottomHeight))

				Hexagon()

			pop()


			push()

				fill(lerpColor(darkBlue, white, lerpPercent))///////////////////////////

				translate(1.5 * radius, 3 * bottomHeight) //white is right below yellow by 2 * bottomHeight

				translate( i*(2 * radius + sideLength), j * (4*bottomHeight))

				Hexagon()

			pop()

		}
	}
}



//class 
function Hexagon() //drawing polygon with polar coordinates
{
	//show()
	//{
	    beginShape()

		    for (var angle = 0; angle < TWO_PI; angle += TWO_PI/6)
		    {
		    	
		    	var x = radius * cos(angle)
		    	var y = radius * sin(angle)

		    	vertex(x, y)
		    }

		endShape()
	//}
}


