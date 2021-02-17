const flock = []





function setup()
{

    createCanvas(600, 600)

    colorMode(RGB, 1)


    for(let i=0; i<100; i++)    
    {
        flock.push(new Boid())
    }





}



function draw()
{
    background(0.5)

    for (let boid of flock)
    {
        boid.edges()
        boid.flock(flock)
        boid.update()
        boid.show()
    }


}
