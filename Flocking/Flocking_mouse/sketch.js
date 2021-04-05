const flock = []

let alignSlider, cohesionSlider, separationSlider, followSlider

let leader, obstacle

let attract = false

function setup()
{
    createCanvas(1280, 720)

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
    flock.push(leader)

    //obstacle = new Obstacle()





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


function keyPressed() 
{
  if (keyCode === UP_ARROW) 
  {
    //gather = !gather
    attract = !attract
  } 


  // if (keyCode === DOWN_ARROW)
  // {
  //   attract = !attract
  //   gather = false
  // }

  // if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)
  // {
  //   attract = false
  //   gather = false
  // }
}
