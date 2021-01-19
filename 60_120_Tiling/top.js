class Top
{
	constructor(x, y)
	{
		this.x = x
		this.y = y
	}

	show()
	{
    beginShape()

	    for (var angle = 0; angle < TWO_PI; angle += TWO_PI/3)
	    {
	    	var r = spade_len
	    	var x = r * cos(angle)
	    	var y = r * sin(angle)

	    	vertex(x, y)
	    }

	endShape()
	}
	

}