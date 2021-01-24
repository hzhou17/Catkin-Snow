
let tops = []

let spade_len = 40

let hori_dis;

function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1);

    background(0)


    hori_dis = spade_len * sin(PI/3) * 2// distance between the centers of 2 adjacent spades.

    print(cos(PI/6))

    for (let i = 0; i < width; i += 150) 
    {
        //for (let j = 0; j < height; j+= 150) 
        {
            //print(i)
            tops.push(new Top(0, 0));

        }


    }


    for (let i = 0; i < tops.length; i++) 
    {
    //stars[i].show();
        tops[i].show();
    }


    

}


function draw()
{
    background(0)

    noStroke()
 
    //if (frameCount % 60 == 0) print(frameRate())
    translate(100, 100)

    // beginShape()

    //     for (var angle = PI/4; angle < TWO_PI + PI/4; angle += TWO_PI/4)
    //     {
    //         var r = spade_len
    //         var x = r * cos(angle)
    //         var y = r * sin(angle)

    //         vertex(x, y)
    //     }

    // endShape()








}