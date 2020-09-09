var bottomHeight //the height from center to bottom, which is shorter than radius
var sideLength


function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1)

    background(0)


	fourHexgons(25, 6)


	for (var i = 0; i < width/(25*3)+1; i++)
	{
		for (var j = 0; j <= height/(5*bottomHeight)+2; j++)
		{
			print(i, j)

			push()

				translate( i*(2 * 25 + sideLength), j * (4*bottomHeight))

				fourHexgons(25, 6)

			pop()
		}
	}

    //saveCanvas('myCanvas', 'png');
}



function polygon(radius, numberOfSides) //drawing polygon with polar coordinates
{
    beginShape()

	    for (var angle = 0; angle < TWO_PI; angle += TWO_PI/numberOfSides)
	    {
	    	var r = radius
	    	var x = r * cos(angle)
	    	var y = r * sin(angle)

	    	vertex(x, y)
	    }

	endShape()

	bottomHeight = r * sin(TWO_PI/numberOfSides) //calculate the height from center to bottom, which is shorter than radius
	sideLength = r * cos(TWO_PI/numberOfSides) * 2
}


function fourHexgons(radius, numberOfSides)
{
	polygon(radius, numberOfSides)


	push() //top right hexgon
	    translate(1.5 * sideLength, 1 * bottomHeight)

	    fill(1, 0.68, 0.29)

	    polygon(radius, numberOfSides)
	pop()

	push() //bottom left hexgon
	    translate(0 * sideLength, 2 * bottomHeight)

	    fill(0.27, 0.65, 0.76)

	    polygon(radius, numberOfSides)
	pop()

	push() //bottom right hexgon
	    translate(1.5 * sideLength, 1 * bottomHeight)
	    translate(0 * sideLength, 2 * bottomHeight)

	    fill(0.01, 0.29, 0.48)

	    polygon(radius, numberOfSides)
	pop()
}





