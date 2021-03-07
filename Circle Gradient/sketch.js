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
    createCanvas(600, 600)
    colorMode(RGB, 1)
    background(0.3, 0.5, 0.8)

    colorMode(RGB, 1)


    translate(width/2, height/2)

    noStroke()

    for (let i=height-100; i>0; i-=50)
    {

        print(i)

        fill(i/height)

        ellipse(0, 0, i, i)

    }







}



function draw()
{


}
