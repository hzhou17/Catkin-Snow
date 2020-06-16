let bubbles = []

var bubble_num = 10

var gravity = 10
 
//var time = 0



function setup()
{
	colorMode(RGB, 1)
	createCanvas(600, 400)

	for (let i = 0; i < bubble_num; i++)
	{
		bubbles[i] = new Bubble(Math.random(-4, 4))
	}




	//print(bubble.x, bubble.y)


}


function draw()
{
	background(0)


	for (let i = 0; i < bubbles.length; i++)
	{
		bubbles[i].fall()
		bubbles[i].show()
	}

}



function Bubble(plus_minus)
{
	this.r = 10

	this.x = width/2
	this.y = 60

	this.time = 0


	this.fall = function()
	{
		this.time += 1/60

		this.x += plus_minus

		//if (plus_minus < 0.5) this.x -= random(1,3)
		//this.x += random(-5, 5)
		this.y += 0.5 * gravity * this.time * this.time




		if (this.y > height) 
		{
			this.x = width/2
			this.y = 60
			this.time = 0

		}
	}

	this.show = function()
	{
		noStroke(0)
		fill(1, 0.5)

		ellipse(this.x, this.y, this.r * 2 )
	}

}
