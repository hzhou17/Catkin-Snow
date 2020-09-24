var size = 15

var increaseSpeed = []
var startRadius = []

var rippleRadius = -5

var tileLayer, fishLayer, head
var imgClone

let mic;


function setup()
{
    createCanvas(600, 800)
    colorMode(RGB, 1)
    background(0.3, 0.5, 0.8)

    userStartAudio();

// mic = new p5.AudioIn();
// mic.start();

    // for (var i = 0; i < 5; i++)
    // {
    //     //increaseSpeed.push[random(5)]

    //     rippleRadius += random(2)

    //     ellipse(width/2, height/2,
    //     rippleRadius + (30 * i), rippleRadius + 30 * i)

    // }



    window.coord = getCoord()


    for (var i = 0; i < 1; i++)
    {
        SmoothMap();
    }

//________________________________________________________________________________________________________________
    tileLayer = createGraphics(600, 800)
    tileLayer.colorMode(RGB, 1)


    for (var i = 0; i < width; i += size) //same for-loop to re-creat the [i, j] coordinates, so that I can access the pre-defined the 0 or 1 values.
    {
        for (var j = 0; j <= height; j += size)
        {
            if (j % (2 * size) == 0) //offset by a radius every other row
            {
                oneScale(size, 2 * i, j, coord[i][j])

            }
            else
            {
                oneScale(size, 2 * i + size, j, coord[i][j])

            }
        }
    }

    tileLayer.stroke(0)
    tileLayer.strokeWeight(8)
    tileLayer.fill(0)


    tileLayer.point(250, 680)
    tileLayer.point(350, 680)


    //tileLayer.ellipse(250, 650, 0.5, 2)
    //tileLayer.ellipse(350, 650, 0.5, 2)
//_____________________________________________________________________________________________________________________________________________

    fishLayer = createGraphics(600, 800);
    KoiShape();
    HeadShape();
    FinShape();
    TaleShape();

//_____________________________________________________________________________________________________________________________________________
    head = createGraphics(600, 800);


(imgClone = tileLayer.get() ).mask( fishLayer.get());//!!!!!!!!

}
//_____________________________________________________________________________________________________________________________________________

function draw()
{
//let vol = mic.getLevel();
    //print(vol)


    background(0.3, 0.5, 0.8)

    image(imgClone, 0, 0); //repeat this step to reduce blue background leaking out from the scales.
    image(imgClone, 0, 0);
    image(imgClone, 0, 0);
    image(imgClone, 0, 0);
    image(imgClone, 0, 0);
    image(imgClone, 0, 0);



    noFill()
    strokeWeight(2)
    stroke(1, 0.5)

//     if (vol > 0.1)
// {    for (var i = 0; i < 5; i++)
//     {
//         //increaseSpeed.push[random(5)]

//         rippleRadius += 1

//         ellipse(width/2, height/2,
//         rippleRadius + (30 * i), rippleRadius + 30 * i)




//     }}

//     ellipse(width/2, height/2, rippleRadius, rippleRadius)

}
