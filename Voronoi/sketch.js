

function setup()
{

    createCanvas(500, 500)

    colorMode(RGB, 1)

    background(0.5)



}



function draw()
{
    loadPixels();

    for (var i = 0; i < width; i++)
    {
        for (var j = 0; j < height; j++)
        {
            var index = i + j * width

            pixels[index] = color(0.5)

            
        }
    }

    updatePixels();


    //fill(1)
    //rect(100, 100, 100, 100)
}
