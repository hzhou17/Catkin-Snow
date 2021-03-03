const flock = []

let alignSlider, cohesionSlider, separationSlider, followSlider

let leader, obstacle

function setup()
{
    createCanvas(600, 600)

    colorMode(RGB, 1)


    alignSlider = createSlider(0, 5, 1, 0.1)
    cohesionSlider = createSlider(0, 5, 1, 0.1)
    separationSlider = createSlider(0, 5, 1, 0.1)
    followSlider = createSlider(0, 10, 5, 1)

    for(let i=0; i<100; i++)    
    {
        flock.push(new Boid())
    }

    leader = new Leader()


    //obstacle = new Obstacle()




    flock.push(leader)
    //flock.push(obstacle)
}



function draw()
{
    background(0.5)

    for (let boid of flock)
    {
        //if (boid != leader)
        {
            boid.edges()
            boid.flock(flock)
            boid.update()

        }
            boid.show()

    }


}
