var circleArray = []

var locX, locY

var radius = 20


function setup()
{
    createCanvas(600, 600)
    colorMode(RGB, 1)
    background(0.5)

    // for (var i = 0; i < 6; i++)
    // {
    //     locX = random(width - 2 * radius)
    //     locY = random(height - 2 * radius)

    //     var circle = new Circle(locX, locY)

    //     circleArray.push(circle)
    // }


}



function draw()
{
    background(0.5)

    for (var i = 0; i < circleArray.length; i++)
    {
        circleArray[i].show()
    }

    var reached = []
    var unreached = []


    for (var i = 0; i < circleArray.length; i++)
    {
        unreached.push(circleArray[i])
    }

    reached.push(circleArray[0])
    unreached.slice(0, 1)

    while(unreached.length > 0)
    {
        var maxDist = Math.hypot(width, height) //max possible distance.
        var reachedIndex, unreachedIndex

       for (var i = 0; i < reached.length; i++)
        {
            for (var j = 0; j < unreached.length; j++)
            {
                var v1 = reached[i]
                var v2 = unreached[j]

                var distance = Math.hypot((v1.x - v2.x), (v1.y - v2.y))

                if (distance < maxDist)
                {
                    maxDist = distance

                    reachedIndex = i
                    unreachedIndex = j

                }
            }
        }

        strokeWeight(2)
        line(reached[reachedIndex].x, reached[reachedIndex].y,
            unreached[unreachedIndex].x, unreached[unreachedIndex].y)


        reached.push(unreached[unreachedIndex])//after finish calculating shortest dist, put unreached into reached
        unreached.splice(unreachedIndex, 1)

    }



}

class Circle
{
    constructor(locX, locY)
    {
        this.x = locX
        this.y = locY
    }

    show()
    {
        ellipse(this.x, this.y, radius, radius)
    }
}

function mousePressed()
{
    var circle = new Circle(mouseX, mouseY)

    circleArray.push(circle)
}
