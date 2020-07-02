class Particle
{
    constructor(x, y)
    {
        this.x = x

        this.y = y
    }


    update()
    {
        this.x += random(-2, 2)
        this.y += random(-2, 2)
    }

    show()
    {
        stroke(1)
        strokeWeight(.1)
        fill(0.9, 0.9, 0.1)
        ellipse(this.x, this.y, 20)
    }



}

