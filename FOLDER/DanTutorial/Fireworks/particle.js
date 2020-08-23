class Particle
{
    constructor(x, y, firework) //firework is the original upward column
    {
        this.pos = createVector(x, y)
        this.firework = firework

        this.lifespan = 1

        if (this.firework) this.vel = createVector(0, random(-13, -7))
        else
        {
            this.vel = p5.Vector.random2D()
            this.vel.mult(random(1, 6))
        }


        this.acc = createVector(0, 0)
    }

    applyForce(force)
    {
        this.acc.add(force)
    }

    update()
    {
        if (!this.firework)
        {
            this.vel.mult(0.9)
            this.lifespan -= 0.03
        }

        this.vel.add(this.acc) //velocity influenced by accer

        this.pos.add(this.vel) //pos influenced by velocity

        this.acc.mult(0)
    }

    done()
    {
        if (this.lifespan < 0) return true
        else return false

    }





    show()
    {
        if (!this.firework) //exploded small pieces
        {
            stroke(1, this.lifespan)
        }
        else
        {
            strokeWeight(4)
            stroke(1)
        }


        point(this.pos.x, this.pos.y)
    }
}
