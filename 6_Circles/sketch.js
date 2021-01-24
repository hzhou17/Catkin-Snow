let rotate_value = 0
let r = 50

var angle = 0;
var speed = 0.02;


let currentX, currentY


function setup() 
{
	createCanvas(400, 400);
}

function draw() 
{
	background(220);

	//rotate_value += PI / 500;
	let rotate_value = 0

	translate(0.5 * width, 0.5 * height)



	var a = r * cos(angle);
	var b = r * sin(angle);

	if (angle == PI/3)
	{
		push()
			translate(a, b)
			Circle()

		pop()
	}



	translate(a, b)


	Circle()


    angle += speed;


}


function Circle()
{


	beginShape()

		for (j = 0; j <= 2 * PI; j += 0.03) 
		{
			currentX = r * sin(j + rotate_value)
			currentY = r * cos(j)
			vertex(currentX, currentY)
		}

	endShape()
}







// class Circle 
// {
// 	constructor(x, y)
// 	{
// 		this.x = x
// 		this.y = y
// 	}

// 	show()
// 	{
// 		push()
// 		rotate(PI/4)

// 		rect(this.x, this.y, 50, 50)
// 		pop()
// 	}
	

// }