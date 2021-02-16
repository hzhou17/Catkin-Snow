class Star
{
	constructor()
	{
		this.initSize = random(2, 8)

		this.size = 0 // give it a value, so it's not null

		this.radius = random(50, max_radius)

		this.alpha = 1
		this.current_alpha = 1

		this.angle = random(0, 2*PI)
		this.initSpeed = random(0.001, 0.018)

		this.trail = []

		//this.brightness = random(0.2, 1)

		this.color = random()

		this.max = this.radius/20
		//Math.floor(Math.random() * 30)

		
		this.life = 0; 
	}

	update()
	{
		//this.currentSpeed = this.initSpeed * mappedVol

		//print(this.max_r)

		this.max_r = max_radius*map(this.radius, 50, max_radius, 0.7, 1)


		this.currentSpeed = this.initSpeed

		if (this.radius < this.max_r)
		{
			this.radius += 1;
		}


		this.life += 1/60

		if (this.life > 2)
		{
			this.current_alpha -= 1/((max_life-2)*60)
		}

		//print(this.life)

		//print(this.alpha)




		// if (!playing)
		// {
		// 	if (this.angle < all_angle || 
		// 	this.angle>all_angle && this.angle<all_angle+2*PI)
		// 	{
		// 		this.angle += this.currentSpeed;
		// 	}
		// }

		// else
		{
			this.angle += this.currentSpeed;
		}



		this.x = width/2 + this.radius * Math.cos(this.angle)
		this.y = height/2 + this.radius * Math.sin(this.angle)





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
	          this.alpha = this.current_alpha;
	          this.size = this.initSize;
	        }
	    
	        this.alpha -= 0.05;

	        this.size -= 0.005;
	    }

	    
	}
	

}