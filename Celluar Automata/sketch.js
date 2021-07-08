var size = 15

var increaseSpeed, reduceSpeed, ringDistance

var rippleRadius = 0

var tileLayer, fishLayer, head
var imgClone

let mic;

var playing = false;

var currentSize

var maxSize = 0
//var sizeList = []
var rippleX, rippleY

var currentAlpha


function setup()
{
    createCanvas(600, 800)
    colorMode(RGB, 1)
    background(0.3, 0.5, 0.8)

    userStartAudio();

    mic = new p5.AudioIn();
    mic.start();
}



function draw()
{
    let vol = mic.getLevel();
    //print(vol)
    let mappedVol = map(vol, 0, 0.4, 0, 10)



    background(0.3, 0.5, 0.8)


    noFill()
    strokeWeight(2)

    randomSeed(99)


    if (mappedVol > 1)
    {
        playing = true

        currentSize = map(mappedVol, 0, 10, 0, 600)

        if (currentSize > maxSize) maxSize = currentSize


    }

    if (playing)
    {
        for (var i = 0; i < 4; i++)
        {

            increaseSpeed = map(maxSize, 0, 600, 0, 1.5) //small ripple disappear too fast. Therefore, remap speed with size
            reduceSpeed = map(increaseSpeed, 0, 1.5, 0, 0.001)

            //increaseSpeed.push[random(5)]
            increaseSpeed -= reduceSpeed;

            rippleRadius += increaseSpeed

            currentAlpha = map(rippleRadius, 0, maxSize, 0.8, 0)


            stroke(1, currentAlpha)



            ellipse(mouseX, mouseY,
            rippleRadius + (50 * i), rippleRadius + 50 * i)
//disappear too quickly because 50 * i gets too large.
        }
    }



    ellipse(random(width), random(height), rippleRadius, rippleRadius)

    print(currentAlpha)

    if (rippleRadius > maxSize || rippleRadius < 0)
    {
        //set back to original
        rippleRadius = 0
        playing = false
        maxSize = 0
        //increaseSpeed = 2
    }

}
