let a = 40
let tile_row = 7

function setup() 
{
	let canvas =

	createCanvas(tile_row*2*sqrt(3)*a/2, tile_row*2*sqrt(3)*a/2);
	colorMode(RGB, 1)
	background(0)

	

	// stroke(0.5)
	// line(0, height/2, width, height/2)
	// line(width/2, 0, width/2, height)



translate(width/2, height/2)





for (let x=-1*width*tile_row/2.5; x<500; x+=a*3)
{
	push()
		translate(0, x)



		for (let j=-1*width*tile_row/2; j<500; j+=a*sqrt(3))
		{
			push()
				translate(j, 0)

				for (let i=0; i<1; i+=1/6)
				{	
					//print("dgdgd")
					push()
					//translate(a*sqrt(3)/2, a)
					rotate(2*2*PI*i)

						cell()
						scale(-1, 1)
						cell()

					pop()
				}
			pop()
		}
	pop()
}


for (let x=-1*width*tile_row/2.5; x<500; x+=a*3)
{
	push()
		translate(0, x+1.5*a)



		for (let j=-1*width*tile_row; j<500; j+=a*sqrt(3))
		{
			push()
				translate(j, 0)

				for (let i=0; i<1; i+=1/6)
				{	
					//print("dgdgd")
					push()
					//translate(a*sqrt(3)/2, a)
					rotate(2*2*PI*i)

						cell()
						scale(-1, 1)
						cell()

					pop()
				}
			pop()
		}
	pop()
}













//saveCanvas(c, 'myCanvas', 'jpg');





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
	quad(0, 0, 
		 -1*sqrt(3)*a/2, a/2, 
		 -3*a*sqrt(3)/8, 5*a/8,
		 0, a/4)
}

function ladder2()
{
	fill(0.7,1,1)
	quad(0, a/4, 
		 a*-1*sqrt(3)/8, 3*a/8,
		 a*-1*sqrt(3)/8, 7*a/8,
		 0, a)
}

function smallTriangle()
{
	fill(1)
	triangle(a*-1*sqrt(3)/8, 3*a/8,
			 -3*a*sqrt(3)/8, 5*a/8,        
			 a*-1*sqrt(3)/8, 7*a/8)
}

function bigTriangle()
{
	triangle(0,a/2,
			 a*sqrt(3)/2, 0,         
			 a*sqrt(3)/2, a)
}