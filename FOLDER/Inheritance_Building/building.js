class Building
{
    constructor(noise_index)
    {
        this.x = noise(noise_index * .8) * width/4;
        this.y = noise(noise_index * .8 + 100) * height;

        this.ratio = this.y / this.x;


    if (this.ratio  > 50 )
    {
      this.x *= remap(this.ratio, 0, 150, 0, 100);
    }


    this.offset = 0;

    this.offset += this.x ;


    }


    show()
    {
      rect(this.x, this.y, this.x, height)

      translate(this.offset, 0)

      //print(this.y)
    }

}
