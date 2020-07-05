class Particle
{
    constructor(x, y, firework) //firework is the original upward column
    {
        this.pos = createVector(x, y)
        this.firework = firework

        if (this.firework) this.vel = createVector(0, random(-13, -7))
        else
        {
            this.vel = p5.Vector.random2D()
            //this.vel.mult(1, 6)
        }


        this.acc = createVector(0, 0)
    }

    applyForce(force)
    {
        this.acc.add(force)
    }

    update()
    {
        this.vel.add(this.acc) //velocity influenced by accer

        this.pos.add(this.vel) //pos influenced by velocity

        this.acc.mult(0)
    }

    show()
    {
        point(this.pos.x, this.pos.y)
    }
}
