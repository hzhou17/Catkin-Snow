var size = 15

var tileLayer, fishLayer, head
var imgClone

function setup()
{
    createCanvas(600, 800)
    colorMode(RGB, 1)
    background(0.3, 0.5, 0.8)


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
//_____________________________________________________________________________________________________________________________________________

    fishLayer = createGraphics(600, 800);
    KoiShape();
    HeadShape();
//_____________________________________________________________________________________________________________________________________________
    head = createGraphics(600, 800);


    (imgClone = tileLayer.get() ).mask( fishLayer.get());//!!!!!!!!

}
//_____________________________________________________________________________________________________________________________________________

function draw()
{


    image(imgClone, 0, 0);
}









