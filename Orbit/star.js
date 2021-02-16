class Star
{
	constructor()
	{
		this.initSize = random(2, 6)

		this.size = 0 // give it a value, so it's not null

		this.radius = random(min_radius, max_radius)

		//this.alpha = 1
		this.current_alpha = 0

		this.angle = random(0, 2*PI)
		this.initSpeed = random(0.001, 0.018)

		this.trail = []


		this.color = random()

		this.max = this.radius/20
		//Math.floor(Math.random() * 30)

		
		this.life = 0; 
	}

	update()
	{
		if (max_radius < 53)
		{
			this.initSpeed = 0.002
		}



		this.r_remap = map(this.radius, min_radius, max_radius, 0.7, 1)
		//if (this.r_remap > 1) this.r_remap = 1

		this.max_r = max_radius * this.r_remap




		if (this.radius < this.max_r)
		{
			if (decrease && max_radius > 53)
			{
				this.radius += 2;
			}

			else
			{
				this.radius += 0.75;
			}
		}


		if (playing) this.radius += 5






		this.life += 1/60

		if (this.life > 2)
		{
			this.current_alpha -= 1/((max_life-2)*frameRate())
		}
		else if (this.current_alpha <= 1)
		{
			this.current_alpha += 0.015
		}

		//print(this.life)

		//print(this.alpha)




		// if (!playing)
		// {
		// 	if (this.angle < all_angle || 
		// 	this.angle>all_angle && this.angle<all_angle+2*PI)
		// 	{
		// 		this.angle += this.initSpeed;
		// 	}
		// }

		// else
		{
			this.angle += this.initSpeed;
		}



		this.x = width/2 + this.radius * Math.cos(this.angle)
		this.y = height/2 + this.radius * Math.sin(this.angle)





		this.trail.push([this.x, this.y])

	    for (let i = this.trail.length; i > 0; i--) //minus because the last one is the first, brightest one
	    {



	        if (this.color > 0.6) fill(0.7, 0.17, 0.17, this.current_alpha)
	        else fill(1, this.current_alpha);
	        

	    	//print(this.trail)


	        ellipse(this.trail[i-1][0], this.trail[i-1][1], this.size)

	        if(this.trail.length > this.max)
	        {
	          this.trail.splice(0, 1);
	          this.alpha = this.current_alpha
	          this.size = this.initSize;
	        }
	    
	        //this.alpha -= 0.01;

	        this.size -= 0.07;
	    }

	    
	}
	

}