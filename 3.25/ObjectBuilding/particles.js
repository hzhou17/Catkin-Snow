function Particles00() 
{
    this.x = random(width)
    this.y = random(200)

    this.len = random(2, 5)



    this.change = 0


    this.yspeed  = random(0, 0.75);             //use random for variation in speeds
    this.xspeed  = random(-0.5, 0.);


    this.show = function()
    {
        noStroke()
        fill(0.9, 0.9, 0.1)

        this.change += 0.1

        if (this.change > 6.28)
        {
            this.change = 0
        }

        this.scale = sin(this.change)*5


        // this.y += this.yspeed;                  //continuously update the xy position to simulate snow falling
        // this.x += this.xspeed;


        rect(this.x, this.y, this.len + this.scale, this.len + this.scale)
    }

}