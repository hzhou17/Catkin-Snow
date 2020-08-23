var fireworks = []
var gravity


function setup()
{
    createCanvas(800, 480)

    gravity = createVector(0, 0.2)

    //fireworks.push(new Firework())


    colorMode(RGB, 1)

    stroke(1)
    strokeWeight(4)

    background(0)
}



function draw()
{
    background(0, 0.3)


    if (random() < 0.1) //this is how to reduce frequency
    {
          fireworks.push(new Firework())
    }



    for (var i = fireworks.length -1 ; i >= 0 ; i--)
    {
        fireworks[i].update()
        fireworks[i].show()

        if (fireworks[i].done())
        {
            fireworks.splice(i, 1)
        }

        //print(fireworks.length)
    }
}
