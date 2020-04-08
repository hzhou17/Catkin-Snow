function Windows00(buildingLen, buildingHeight, building_xoff) //the length and height of the build the windows belong to. x and y translation offset.
{
    this.x = buildingLen/10
    this.y = buildingHeight/15


    this.x_range = buildingLen;
    this.y_range = buildingHeight;


    this.x_offset = building_xoff// + (buildingLen/2)/2;
    this.y_offset = this.y_range * 1.1;


    this.show = function()
    {
        fill(0.8, 0.8, 0.1)

        translate(this.x_offset, 0) //horizontally move onto the building.

        for (var i = 0; i < this.x_range; i += buildingLen/2)
        {
            for (var j = 0; j < this.y_range; j += buildingHeight/2)
            {
              push()
                translate(i , j)
                rect(buildingLen/4 - this.x/2, this.y_offset, this.x, this.y) //creation y value is based on y_offst, the height of the building
              pop()
            }
        }
    }

}