class Window_ extends Building
{
  constructor(noise_index)
  {
    super(noise_index)

    this.height = 10
    this.width = 10



    this.column = 2//Math.floor(Math.random() * 5)

    this.row = 2//Math.floor(Math.random() * 3)

  }

  show()
  {

    for (var i = 0; i <= this.row; i++)
    {
        for (var j = 0; j <= this.column; j++)
        {
            this.total_len = (this.row) * 30 + this.width * (this.row + 1)


            push()
                fill(0.5)

                translate(i * 30, j * 50)

                rect(this.x - (this.x + this.total_len)/2 + this.width, this.y + (height -this.y) * 0.5 , this.width, this.height)

            pop()


        }

    }
      print(this.x)

      //rect(this.x, 0, 600, 600)

  }






}
