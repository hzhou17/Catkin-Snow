class Boid
{
    constructor()
    {
        this.position = createVector(random(width), random(height))
        this.vel = p5.Vector.random2D()
        this.vel.setMag(random(2, 4))
        this.accel = createVector()
        this.maxForce = 0.2
        this.maxSpeed = 4
    }

    align(boids)
    {
        let perceiveRadius = 50

        let steering = createVector()

        let total = 0


        for (let other of boids)
        {
            let distance = dist(
                this.position.x, 
                this.position.y, 
                other.position.x, 
                other.position.y)

            if (other != this && distance < perceiveRadius)
            {
                steering.add(other.vel)
                total++
            }
        }

        if (total > 0)
        {
            steering.div(total)
            steering.setMag(this.maxSpeed)
            steering.sub(this.vel)
            steering.limit(this.maxForce)
        }

        return steering
    }


    cohesion(boids)
    {
        let perceiveRadius = 50

        let steering = createVector()

        let total = 0


        for (let other of boids)
        {
            let distance = dist(
                this.position.x, 
                this.position.y, 
                other.position.x, 
                other.position.y)

            if (other != this && distance < perceiveRadius)
            {
                steering.add(other.position)
                total++
            }
        }

        if (total > 0)
        {
            steering.div(total)
            steering.sub(this.position)
            //steering.setMag(this.maxSpeed)
            steering.sub(this.vel)
            steering.limit(this.maxForce)
        }

        return steering
    }

















    flock(boids)
    {
        //let alignment = this.align(boids)
        let cohesion = this.cohesion(boids)

        this.accel = cohesion



        //this.accel = alignment

    }



    update()
    {
        this.position.add(this.vel)
        this.vel.add(this.accel)
    }




    show()
    {
        strokeWeight(5)
        stroke(1)
        point(this.position.x, this.position.y)
    }


    edges()
    {
        if (this.position.x > width)
        {
            this.position.x = 0
        } 
        if (this.position.x < 0) this.position.x = width

        if (this.position.y > height)
        {
            this.position.y = 0
        } 
        if (this.position.y < 0) this.position.y = height
    }







}