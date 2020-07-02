class Storey extends Building
{
  constructor(noise_index)
  {
    super(noise_index)

    this.height = 25

    this.num = Math.floor(Math.random() * 4) + 1

  }

  show()
  {
    //fill(0.5)

    rect(this.x - this.x * 0.75,  this.y    , this.x * 0.5, -this.height)

    //translate(this.offset, 0)
    //print(this.x)

    print(this.y)

  }



}



