function Windows00(buildingLen, buildingWid) //the length and height of the build the windows belong to. x and y translation offset.
{
     this.draw = function()
    {

        fill(1, 1, 0) // yellow color

        this.row = 2//floor(random(0, 4))
        this.column = 2

        this.winLen = buildingLen/8
        this.winHei = buildingWid/8


        translate(this.offset - this.x, 0)

        for (var i = 0; i < this.row; i++)
        {
            for (var j = 0; j < this.column; j++)
            {
              push()

                var x_gap = 30


                translate(i*x_gap + (this.x - x_gap*(this.row-1) - this.winLen)/2,   this.y)   //x_gap = winLen + the gap between 2 windows.


                rect(0, 0, this.winLen, this.winHei) 
              pop()                                    
            }

        }

    }

}