class Boid
{
	constructor()
	{
		this.position = createVector(random(width), random(height))


        this.velocity = p5.Vector.random2D()
        this.velocity.setMag(random(1, 2))


        this.color = random()





	}




	follow()
	{

        




	}




	move()
	{
        this.leader_velocity = createVector(mouseX, mouseY)
        this.leader_velocity.setMag(1)


        this.position.add(this.leader_velocity)
        this.position.sub(this.velocity)



        //this.position.

	}



	show()
	{
        noStroke()
        if (this.color > 0.5) fill(1, 0, 0)
        else fill(0, 0, 1)

        ellipse(this.position.x, this.position.y, 5, 5)
	}

    edges()
    {
        if (this.position.x > width) this.position.x = 0
        if (this.position.x < 0) this.position.x = width
        if (this.position.y > height) this.position.y = 0
        if (this.position.y < 0) this.position.y = height
    }








}