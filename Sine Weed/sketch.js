let aspect_ratio = 16/9

let circle_num = 28

let circle_size


function setup()
{
	width = window.innerWidth; 
	height = width/aspect_ratio


	circle_size = width/circle_num




    createCanvas(width, height)
    colorMode(RGB, 1)
    background(0)

}



function draw()
{
    background(0)

    fill(1, 0.5)

    for (let i=0; i< circle_size; i+=1)
    {
    	let sin_y = 100*sin((frameCount/60+i)*2)

        ellipse(circle_size*i, height/2 + sin_y, circle_size, circle_size)
    }



    if (frameCount%60==0) print(100*sin(frameCount/30))

}
