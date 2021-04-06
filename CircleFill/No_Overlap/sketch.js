let circles = []

let collide_num = 0
let protection = 0


function setup() 
{
	createCanvas(640, 360);

	while (circles.length < 2500)
	{
		let circle = 
		{
		  x : random(width),
		  y : random(height),
		  r : 10
		}

		let overlapping = false

		for (let j = 0; j < circles.length; j++) 
		{
			let current = circle
			let other = circles[j]

			let dSquared = (current.x-other.x)*(current.x-other.x)+
			 (current.y-other.y)*(current.y-other.y) 

			if (dSquared < (current.r + other.r)*(current.r + other.r)) 
			{
				overlapping = true
			}
		}

		if (overlapping == false)
		{
			circles.push(circle)
		}

		protection++

		if (protection > 10000000) break


	}


	for (let j of circles)
	{
		ellipse(j.x, j.y, j.r, j.r)
	}


} 
    
    
  


  
