class Firework
{
    constructor()
    {
    this.firework = new Particle(random(width), height, true)// true means firework is the original upward column
    this.exploded = false

    this.particles = [] //small pieces of exloded particles
    //it takes functions and values from the Particle class in the explore function below
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


        for (var i = this.particles.length - 1; i >= 0; i--)
        {
            this.particles[i].applyForce(gravity)
            this.particles[i].update()

            if (this.particles[i].done()) //lifespan is alpha. as soon as alpha is 0. no need to w8 for it to fall out of screen
            //done function is in Particle class, because these small particles are from there. generated in the explode function below
            {
                this.particles.splice(i, 1) // at i, take 1 out
            }

        }





    }

    explode()
    {
        for (var i = 0; i < 100; i++)
        {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y)//missing an argument, JS takes it as
            this.particles.push(p)
        }
    }


    done() //this is for the firework initial upward column
    {
        if (this.exploded && this.particles.length == 0) return true //this.particles.length == 0 because the upward rising firework needs to wait for all the small particle to be done
        else return false
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
