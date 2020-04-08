function Storey00(buildingLen, buildingHeight, 
                  building_xoff, noise_index)
{
    this.level_num = Math.floor(Math.random() * 5);  //get a random number of floors

    this.floor_len = buildingLen * random(0.5, 0.9)  //make the floor length smaller than the base building length


    this.x_offset = (buildingLen - this.floor_len)/2 //move the floor to the CENTER of the previous floor

    this.floor_height = random(20, 50)

    this.floor_len_sum = 0
    this.floor_height_diff = 0

    this.show = function()
    {

        translate(building_xoff, 0) //horizontal building offset


              fill(map(noise(noise_index*0.2), 1, 0, 0.5, 0))


        for (var i = 0; i < this.level_num; i ++) // for loop to make the floor stacks
        {

            rect(this.x_offset + this.floor_len_sum, 

                  buildingHeight - this.floor_height - this.floor_height_diff , //iterate and raise height

                  this.floor_len, this.floor_height)

    
            var last_floor_len = this.floor_len //store the length of the current/last floor to be.
            var last_floor_height = this.floor_height;


            this.floor_len *= random(0.3, 0.8) // make the next floor length smaller
            this.floor_height = random(20, 50)

            this.floor_len_sum += (last_floor_len - this.floor_len)/2 //summation of a x translation WITHIN one storey stack. Put it here at the end of the loop, so that the first iteration is Not influenced.
            this.floor_height_diff += last_floor_height //raise a floor by the height of the previous floor
        }




    }
}