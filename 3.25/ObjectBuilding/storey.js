function Storey00(buildingLen, buildingHeight, building_xoff)
{
    this.level_num = 4 //Math.floor(Math.random() * 4);  //get a random number of floors

    this.floor_len = buildingLen * random(0.5, 0.8)  //make the floor length smaller than the base building length



    this.x_offset = (buildingLen - this.floor_len)/2 //move the floor to the CENTER of the previous floor


    this.show = function()
    {
        fill(0)
        translate(building_xoff + this.x_offset, 0) //building offset + floor offset

        for (var i = 0; i < this.level_num; i ++) // for loop to make the floors
        {
            this.floor_height = this.floor_len / random(0, 2)

            //translate(0, )


          if( i == 0)
          {
            rect(0, buildingHeight-this.floor_height, this.floor_len, this.floor_height)
          }  



          if( i >=1 )
          {
              translate((last_floor_len - this.floor_len)/2 , 0)
              rect(0, buildingHeight-this.floor_height, this.floor_len, this.floor_height)
          }

         
            

            var last_floor_len = this.floor_len //store the length of the current/last floor to be.

            this.floor_len *= random(0.3, 0.7) // make the next floor length smaller



        }




    }
}