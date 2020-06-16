let bubbles = []

var bubble_num = 5

function setup()
{
	colorMode(RGB, 1)
	createCanvas(600, 400)

	// for (let i = 0; i < bubble_num; i++)
	// {
	// 	let x = random(width)
	// 	let y = random(height)
	// 	let r = random(10, 40)


	// 	bubbles[i] = new Bubble(x, y ,r)
	// }




	//print(bubble.x, bubble.y)


}


function draw()
{
	background(0)


	for (let i = 0; i < bubbles.length; i++)
	{
		bubbles[i].move()
		bubbles[i].show()
	}

}



function Bubble(x, y ,radius)
{
	this.x = x
	this.y = y


	this.move = function()
	{
		this.x += random(-5, 5)
		this.y += random(-5, 5)
		this.r = radius
	}

	this.show = function()
	{
		noStroke(0)
		fill(1, 0.5)

		ellipse(this.x, this.y, this.r * 2 )
	}

}

function mousePressed()
{
	let r = random(10, 50)

	let b = new Bubble(mouseX, mouseY, r)

	bubbles.push(b)
}