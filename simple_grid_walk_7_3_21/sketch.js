let row_num = 20
let col_num = 20


let size 


let pool = []

let grid_num = 0


function setup() 
{
	createCanvas(600, 600);

	size = width/row_num

	for (let i = 0; i<row_num; i++)
	{
		for(let j = 0; j<col_num; j++)
		{				
			let index = (i+(j-1)*20).toString()

			//text(index, i*size, j*size)


			//rect(i*size, j*size, size, size)

			pool.push(new Grid(j*size, i*size, index)) //switch the order of j and i. so that (j increases, i stays 0: draws horizontally)
 
		}
	}


}

function draw() 
{


	for (let i=0; i<=grid_num; i++)
	{
		if (pool[i] != null)
		{
			pool[i].index = i

			pool[i].draw()
		} 		
	}


	if (grid_num < row_num*col_num) grid_num++
}


class Grid
{
	constructor(x, y, index)
	{
		this.x = x
		this.y = y
		this.index = index
	}

	draw()
	{
		rect(this.x, this.y, size, size)
		text(this.index.toString(), this.x, this.y+size)
	}
}
