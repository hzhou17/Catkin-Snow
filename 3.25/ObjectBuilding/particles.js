function Particles00() 
{
    this.x = random(width)
    this.y = random(150)

    this.len = random(1, 2)

    this.change = 0

    this.show = function()
    {
        noStroke()
        fill(0.9, 0.9, 0.1) //yellow star color

        this.change += 0.1

        if (this.change > 6.28) //6.28 is 2 PI, a range in which sine goes from 0 to 1 to -1 and back to 0
        {
            this.change = 0
        }

        this.scale = sin(this.change / 10) // /10 to reduce frequency

        rect(this.x, this.y, this.len + this.scale, this.len + this.scale)
    }

}