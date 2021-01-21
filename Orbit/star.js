class Star
{
	constructor()
	{
		this.initSize = random(2, 6)

		this.size = 0 // give it a value, so it's not null

		this.radius = random(35, window.innerHeight * 0.85)

		this.alpha = 1

		this.angle = random(0, 360)
		this.initSpeed = random(0.001, 0.01)

		this.trail = []

		//this.brightness = random(0.2, 1)

		this.color = random()

		this.max = this.radius/18
		//Math.floor(Math.random() * 30)
	}

	update()
	{
		this.x = width/2 + this.radius * Math.cos(this.angle)
		this.y = height/2 + this.radius * Math.sin(this.angle)



		this.currentSpeed = this.initSpeed * mappedVol
		//this.currentMax = this.max * mappedVol


		//print(this.size)

	  //   if (mappedVol > 1)
	  //   {
	  //   	playing = true

			// this.maxSpeed = this.initSpeed * mappedVol
	  //   }
	  //   else
	  //   {
	  //   	this.currentSpeed = this.initSpeed
	  //   }

	  //   //print(this.maxSpeed)
	  //   print(mappedVol)

	  //   if (playing)
	  //   {
	  //   	var timer = 0
	  //   	timer += 1/60 * 0.3
	  //   	this.currentSpeed = lerp(this.initSpeed, this.maxSpeed, timer)


	  //   }

	  //   if (timer > 1)
	  //   {
	  //   	playing = false;
	  //   	this.currentSpeed = this.initSpeed
	  //   	timer = 0
	  //   }




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
	          this.alpha = 1;
	          this.size = this.initSize;
	        }
	    
	        this.alpha -= 0.05;




	        this.size -= 0.005;

	    }

	    this.angle += this.currentSpeed;
	}
	

}