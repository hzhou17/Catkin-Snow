class Fish
{
    constructor()
    {
        this.x = random(600)
        this.y = random(600)
    }

    swim()
    {
        this.x += 1
        this.y += 1  
    }



    show()
    {
        fill(0)

        rect(this.x, this.y, 20, 20)

    }

}