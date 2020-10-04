var circleArray = []

var locX, locY

var radius = 20


function setup()
{
    createCanvas(600, 600)
    colorMode(RGB, 1)
    background(0.5)

    // for (var i = 0; i < 6; i++) //have a certain number of circles show up at the beginning
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

        if (frameCount % 60 == 0)
        {        
            for (var j = 0; j < circleArray.length; j++) //get rid of overlapping circle (overlap because the user dragged them together)
            {
                if (i != j)
                {
                    var d = (circleArray[i].x - circleArray[j].x) ** 2 +  //do not take square root because it's hard to compute
                            (circleArray[i].y - circleArray[j].y) ** 2                 
                }

                if (d == 0)
                {
                    circleArray.splice(j, 1)
                }
            }
        }

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
    if (mouseX < width && mouseY < height)
    {
        var circle = new Circle(mouseX, mouseY)

        circleArray.push(circle)  

        //print(circleArray.length)        
    }

}


function mouseDragged()
{
    {
        for (var i = 0; i < circleArray.length; i++)
        {
             if (Math.hypot(mouseX - circleArray[i].x, mouseY - circleArray[i].y ) < radius) //the mouse has to stay inside the region during drag. can't drag too fast. 2 * radius to make the region larger 
             {
                circleArray[i].x = mouseX
                circleArray[i].y = mouseY
             }   
        }
    }  
}

    // for (var i = 0; i < 6; i++)
    // {
    //     locX = random(width - 2 * radius)
    //     locY = random(height - 2 * radius)

    //     var circle = new Circle(locX, locY)

    //     circleArray.push(circle)

    //     coord.push([locX, locY])

    // }



    // coord.forEach(x => print(x)) //get [x, y] for each point


    // coord.forEach(x => 
    // {
    //     coord.forEach(y => 
    //     {

    //     })
    // })