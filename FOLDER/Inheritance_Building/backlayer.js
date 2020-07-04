class Backlayer extends Building
{
    constructor(noise_index)
    {
        super(noise_index)

        this.x_off = 50
        this.y_off = 50
    }



    show()
    {
      rect(this.x + 50, this.y - 100, this.x, height)

      //translate(this.x_off, this.y_off)
    }


}
