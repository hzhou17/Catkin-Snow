class Leader
{
	constructor()
	{
		this.vel = p5.Vector.random2D()
		this.vel.setMag(random(3, 5))
	}

	show()
	{
        //noStroke()
		fill(0)

        ellipse(mouseX, mouseY, 20, 20)
	}
}