


function setup()
{
    createCanvas(800, 600)
    colorMode(RGB, 1)
    background(0)

}



function draw()
{
    background(0)


    for (let i=0; i< width/20; i+=1)
    {
        ellipse(25*i, height/2 + 100*sin((frameCount/60+i)*20), 20, 20)
    }

}
