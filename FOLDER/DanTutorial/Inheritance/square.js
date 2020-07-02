class Square extends Particle
{
    constructor(x, y)
    {
        super(x, y)

        this.bright = random(1)
        this.r = 10
    }

    update()
    {
        super.update()
        this.r += random(-10, 10)
    }




    show()
    {
        strokeWeight(1)
        stroke(1)
        fill(this.bright)
        square(this.x, this.y, this.r)
    }


}

