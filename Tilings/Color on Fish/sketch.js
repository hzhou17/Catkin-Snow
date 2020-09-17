

var myRadius =50

var sides = 6


function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1)

    background(.3, .56, .73)


	//halfCircle(myRadius)

	for (var i = 0; i < width/myRadius; i++)
	{
		for (var j = 0; j <= height/myRadius; j++)
		{
			push()
				stroke(0)
				strokeWeight(5)
				fill(.3, .56, .73)

				translate( i * 2 * myRadius , j * (myRadius +1.5) )

				if (j % 2 == 1)
				{
					translate(myRadius, 0)
				}

				halfCircle(myRadius)

			pop()
		}
	}

    saveCanvas('myCanvas', 'png');
}



function halfCircle(radius) //drawing halfCircle with polar coordinates
{
    beginShape()

	    for (var angle = 0; angle < PI; angle += 0.1)
	    {
	    	var r = radius
	    	var x = r * cos(angle)
	    	var y = r * sin(angle)

	    	vertex(x, y)
	    }

	endShape()
}


function fourHexgons(radius, numberOfSides)
{
	halfCircle(radius)


	push() //top right hexgon
	    translate(1.5 * sideLength, 1 * bottomHeight)

	    fill(1, 0.68, 0.29)

	    halfCircle(radius)
	pop()

	push() //bottom left hexgon
	    translate(0 * sideLength, 2 * bottomHeight)

	    fill(0.27, 0.65, 0.76)

	    halfCircle(radius)
	pop()

	push() //bottom right hexgon
	    translate(1.5 * sideLength, 1 * bottomHeight)
	    translate(0 * sideLength, 2 * bottomHeight)

	    fill(0.01, 0.29, 0.48)

	    halfCircle(radius)
	pop()
}





