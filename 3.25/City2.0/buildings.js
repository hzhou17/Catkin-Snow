function Building00(noise_index)
{


//----------------------------------------------------------------------------------------------------------------    
    this.x = noise(noise_index * .8) * width/5;
    this.y = noise(noise_index * .8 + 100) * height;

//----------------------------------------------------------------------------------------------------------------    

    this.ratio = this.y / this.x;


    if (this.ratio  > 65 )
    {
      this.x *= map(this.ratio, 0, 500, 0, 200);
    }

//----------------------------------------------------------------------------------------------------------------

    this.offset = 0;

    this.offset += this.x ;

//----------------------------------------------------------------------------------------------------------------
    this.windows = function()
    {
    	push()
    	fill(1, 1, 0) // yellow color
    	this.row = floor(noise(noise_index * .8)*4)
    	this.column = 2

    	this.winLen = this.x/8
    	this.winHei = this.y/8


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
    	pop()
    }


    this.show = function()
    {
      fill(0.5)

      rect(this.x, this.y, this.x, height)

      translate(this.offset, 0)

      this.windows()
    }
}