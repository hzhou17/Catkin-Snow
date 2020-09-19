var size = 15

var myRadius = 25

var sides = 6

var fish = []

var fishLayer


function setup()
{
    createCanvas(600, 600)

    fishLayer = createGraphics(600, 600)
    fishLayer.background(1)

    colorMode(RGB, 1)

    background(0.6)



    noStroke()



    //saveCanvas('myCanvas', 'png');
    //for (var i = 0; i < 1; i++)
    {
	    fish[0] = new Fish(150, 250)

        //fish[1] = new Fish(200, 400)

	}

}
//_____________________________________________________________________________________________________________________________________________
function draw()
{
    image(fishLayer, 0, 0)



    for (var i = 0; i < fish.length; i++)
    {
    	//fish[i].swim()
    	fish[i].show()
    }


}


//_____________________________________________________________________________________________________________________________________________



