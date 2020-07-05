class Firework
{
    constructor()
    {
    this.firework = new Particle(random(width), height, true)// true means firework is the original upward column
    this.exploded = false

    this.particles = []
    }


    update()
    {
        if (!this.exploded)
        {
            this.firework.applyForce(gravity)
            this.firework.update()

            if (this.firework.vel.y >= 0)
            {
                this.exploded = true
                this.explode()
            }
        }


        for (var i = 0; i < this.particles.length; i++)
        {
            this.particles[i].applyForce(gravity)
            this.particles[i].update()
        }





    }

    explode()
    {
        for (var i = 0; i < 100; i++)
        {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y)//missing an argument, JS takes it as false
            this.particles.push(p)
        }
    }





    show()
    {
        if (!this.exploded)
        {
            this.firework.show()
        }

        for (var i = 0; i < this.particles.length; i++)
        {
            this.particles[i].show()
        }


    }
}
