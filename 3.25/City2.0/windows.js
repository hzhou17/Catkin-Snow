function Windows00(buildingLen, buildingHeight, building_xoff, noise_index) //the length and height of the build the windows belong to. x and y translation offset.
{
    this.x = buildingLen/10
    this.y = this.x * map(noise(noise_index*50), 0, 1, 0.75, 1.4)


    this.x_range = buildingLen;
    this.y_range = buildingHeight;


    this.x_offset = building_xoff// + (buildingLen/2)/2;
    this.y_offset = this.y_range * map(noise(noise_index*150), 0, 1, 1.2, 2);

    this.win_col = floor(noise(noise_index*100)*5)+1




    this.show = function()
    {
        fill(0.7, 0.6, 0.1)

        translate(this.x_offset, 0) //horizontally move onto the building.


      // if((floor(random(0, 1)*300) > 0) && (floor(random(0, 1)*300) < 250))
      // {
        for (var i = 0; i < this.x_range; i += buildingLen/2)
        {
            //translate(this.x_offset * (i + 1), 0)
            for (var j = 0; j < this.y_range; j += buildingHeight/this.win_col)
            {
              push()
                translate(i, j)
                rect(buildingLen/4 - this.x/2, this.y_offset, this.x, this.y) //creation y value is based on y_offst, the height of the building
              pop()                                                           //buildingLen/4 - this.x/2: makes the windows to be in the center of the building    
            }
        }
      }
    // }

}