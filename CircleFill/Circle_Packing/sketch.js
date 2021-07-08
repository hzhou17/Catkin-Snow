let circles = []

let collide_num = 0
let protection = 0


function setup() 
{
	createCanvas(640, 360);
	colorMode(RGB, 1)
	noFill()

	for (let i=0; i<10; i++)
	{
		circles.push(new Circle())
	}


	for (let i of circles)
	{
		i.show()
		//print(i.x)
		//print(i.y)
	}



} 
    

function draw()
{
	background(0.5)

	circles.add(new Circle(random(width), random(height)))


	for (let i of circles)
	{
		i.show()
		i.grow()
	}
}
    
  

class Circle
{
	constructor()
	{
		this.x = random(width)
		this.y = random(height)
		this.dia = 5
	}

	show()
	{
		ellipse(this.x, this.y, this.dia, this.dia)
	}

	grow()
	{
		if (!this.onEdges())
		{
			//print("fsfsfs")
			this.dia += 1
			//print(this.dia)
		}
	}

	onEdges()
	{
		return (this.x-this.dia/2 < 0 || 
			this.x+this.dia/2 > width || 
			this.y-this.dia/2 < 0 || 
			this.y+this.dia/2 > height)
	}




}
  
