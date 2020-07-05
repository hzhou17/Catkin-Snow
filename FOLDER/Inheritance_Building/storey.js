class Storey extends Building
{
  constructor(noise_index)
  {
    super(noise_index)

    this.height = 25

    this.num = Math.floor(Math.random() * 5)
  }

  show()
  {
    for (var i = 0; i < this.num; i ++)
    {
        this.wid = this.x * Math.pow(0.5, i + 1) //width of one floor


        rect((this.x - this.wid) * 0.5, //this is how to put each floor in the middle of its base

              this.y - i * this.height, //iterate by moving up this starting height

              this.wid,

              -this.height) //each floor goes up, has a lower value, so minus
    }
  }


}



