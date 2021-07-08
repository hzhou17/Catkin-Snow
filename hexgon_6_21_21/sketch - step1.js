let a = 40


function setup() 
{
	createCanvas(400, 400);
	colorMode(RGB, 1)
	background(0)

	

	stroke(0.5)
	line(0, height/2, width, height/2)
	line(width/2, 0, width/2, height)



translate(width/2, height/2)







for (let i=0; i<1; i+=1/6)
{	
	print("dgdgd")
	push()
	//translate(a*sqrt(3)/2, a)
	rotate(2*PI*i)
	cell()
	pop()
}



//cell()








// push()
// 	cell()
// 	translate(a*sqrt(3), 0)
// 	scale(-1, 1)
// 	cell()
// pop()



// push()

// 	translate(a*sqrt(3)*1.25, a-a/4)
// 	rotate(2*PI/3)

// 	push()
// 		cell()
// 		//translate(a*sqrt(3), 0)
// 		scale(-1, 1)
// 		//cell()
// 	pop()

// pop()



}

function draw() 
{
	
}



function cell()
{
	ladder1()
	ladder2()
	smallTriangle()
}


function ladder1()
{
	fill(0.53,0.81,0.94)
	quad(a*sqrt(3)/2, 0, 
		 0, a/2, 
		 a*sqrt(3)/8, 5*a/8,
		 a*sqrt(3)/2, a/4)
}

function ladder2()
{
	fill(0.7,1,1)
	quad(a*sqrt(3)/2, a/4, 
		 a*3*sqrt(3)/8, 3*a/8,
		 a*3*sqrt(3)/8, 7*a/8,
		 a*sqrt(3)/2, a)
}

function smallTriangle()
{
	fill(1)
	triangle(a*3*sqrt(3)/8, 3*a/8,
			 a*sqrt(3)/8, 5*a/8,        
			 a*3*sqrt(3)/8, 7*a/8)
}

function bigTriangle()
{
	triangle(0,a/2,
			 a*sqrt(3)/2, 0,         
			 a*sqrt(3)/2, a)
}