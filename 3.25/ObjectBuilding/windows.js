function Windows(buildingLen, buildingHeight, building_xoff) //the length and height of the build the windows belong to. x and y translation offset.
{
    this.x = buildingLen/10
    this.y = buildingHeight/10


    this.x_range = buildingLen;
    this.y_range = buildingHeight;


    this.x_offset = building_xoff *1.175;
    this.y_offset = this.y_range * 1.1;


    this.show = function()
    {
      push()

        fill(0.8, 0.8, 0.1)

        translate(this.x_offset, this.y_offset) //move onto the building

        for (var i = 0; i < this.x_range; i += buildingLen/3)
        {
            for (var j = 0; j < this.y_range; j += buildingHeight/3)
            {
                rect(i, j, this.x, this.y)
            }
        }

      pop()  
    }

}