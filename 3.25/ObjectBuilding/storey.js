function Storey00(buildingLen, buildingHeight, building_xoff)
{
    this.level_num = 3 //Math.floor(Math.random() * 4);  //get a random number of floors

    this.floor_len = buildingLen * 0.5//random(0.5, 0.8)  //make the floor length smaller than the base building length


    this.x_offset = (buildingLen - this.floor_len)/2 //move the floor to the CENTER of the previous floor

    this.floor_height = random(20, 50)

    this.floor_len_sum = 0
    this.floor_height_diff = 0

    this.show = function()
    {

        translate(building_xoff, 0) //building offset + floor offset

        for (var i = 0; i < this.level_num; i ++) // for loop to make the floors
        {
            fill(0 + i*0.2)


            rect(this.x_offset + this.floor_len_sum, 

                    buildingHeight - this.floor_height - this.floor_height_diff , //iterate and raise height

                    this.floor_len, this.floor_height)

    
            var last_floor_len = this.floor_len //store the length of the current/last floor to be.
            var last_floor_height = this.floor_height;


            this.floor_len *= random(0.3, 0.7) // make the next floor length smaller
            this.floor_height = random(20, 50)

            this.len_sum += (last_floor_len - this.floor_len)/2 //summation of a x translation WITHIN one storey stack. Put it here at the end of the loop, so that the first iteration is Not influenced.
            this.height_diff_sum += last_floor_height //raise a floor by the height of the previous floor
        }




    }
}