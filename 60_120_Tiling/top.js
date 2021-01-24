class Top
{
	constructor(x, y)
	{
		this.x = x
		this.y = y
	}

	show()
	{
		push()
		rotate(PI/4)

		rect(this.x, this.y, 50, 50)
		pop()
	}
	

}