let circles = []

let overlap

let protection = 0

function setup() 
{
	createCanvas(640, 360);

	while (circles.length < 120)
	{
		let x = random(width)
		let y = random(height)
		let r = random(15, 30)

		overlap = false





		for (let j of circles)
		{
			let distanceSq = (x-j[0])*(x-j[0]) + (y-j[1])*(y-j[1])

			//print(j)




			if (distanceSq < (r + j[2])*(r + j[2]))
				overlap = true
			
			
		}

		//print(overlap)
		if (overlap == false)
		{
			// ellipse(x, y, r, r)
			circles.push([x, y, r])
		}

		protection++
		//print(protection)

		if (protection > 10000000)
		{
			print(circles.length)
			break
		} 



	}




	// for (let i of circles)
	// {
	// 	ellipse(i[0], i[1], i[2], i[2])
	// }

} 
    
function draw()
{
	for (let i of circles)
	{
		// let current = i;
		// let other = 





		// i[2]+=0.01







		ellipse(i[0], i[1], i[2], i[2])
	}
}
    
  

class Circle
{
	constructor(x, y, r)
	{
		this.x = x
		this.y = y
		this.r = r
	}













}
  
