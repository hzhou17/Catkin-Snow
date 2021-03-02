class Star
{
	constructor()
	{
		this.initSize = random(2, 6)

		this.size = 0 // give it a value, so it's not null

		this.radius = random(100, 300)

		this.head_alpha = 0, this.alpha = 0

		this.angle = random(0, 360)
		this.speed = random(0.005, 0.02)

		this.trail = []



		this.color = random()

		this.max = this.radius/10


    	this.life = 0


	}

	update()
	{
		this.life += 1 / frameRate()

		this.x = width/2 + this.radius * Math.cos(this.angle)
		this.y = height/2 + this.radius * Math.sin(this.angle)


		if (this.life >= 1.4) 
		{
		  this.head_alpha -= 1 / ((max_life - 2) * frameRate())
		} 
		else if (this.alpha <= 0.985) 
		{
		  this.head_alpha += 0.015
		}
















		//print(this.size)

		this.trail.push([this.x, this.y])

	    for (let i = this.trail.length; i > 0; i--) //minus because the last one is the first, brightest one
	    {
	        if (this.color > 0.6) fill(0.7, 0.17, 0.17, this.alpha)
	        else fill(1, this.alpha);
	        
	    	//print(this.trail)



	        ellipse(this.trail[i-1][0], this.trail[i-1][1], this.size)


	        if(this.trail.length > this.max)
	        {
	          this.trail.splice(0, 1);
	          this.alpha = this.head_alpha;
	          this.size = this.initSize;
	        }
	    
	        if (this.head_alpha >= 0.05) this.alpha -= 0.05;

	        if (this.size >= 0.1) this.size -= 0.1;
	        
	    }



	    this.angle += this.speed;
	}
	

}