class Leader
{
    constructor()
    {
        this.position = createVector(mouseX, mouseY)

        // this.vel = p5.Vector.random2D()
        // this.vel.setMag(random(1, 2))
        // this.accel = createVector()
        // this.maxForce = 0.2
        // this.maxSpeed = 4
    }

    align(boids)
    {
        // let perceiveRadius = 50

        // let steering = createVector()

        // let total = 0


        // for (let other of boids)
        // {
        //     let distance = dist(
        //         this.position.x, 
        //         this.position.y, 
        //         other.position.x, 
        //         other.position.y)

        //     if (other != this && distance < perceiveRadius)
        //     {
        //         steering.add(other.vel)
        //         total++
        //     }
        // }

        // if (total > 0)
        // {
        //     steering.div(total)
        //     steering.setMag(this.maxSpeed)
        //     steering.sub(this.vel)
        //     steering.limit(this.maxForce)
        // }

        // return steering
    }


    cohesion(boids)
    {
        // let perceiveRadius = 50
        // let steering = createVector()
        // let total = 0

        // for (let other of boids)
        // {
        //     let distance = dist(
        //         this.position.x, 
        //         this.position.y, 
        //         other.position.x, 
        //         other.position.y)

        //     if (other != this && distance < perceiveRadius)
        //     {
        //         steering.add(other.position)
        //         total++
        //     }
        // }

        // if (total > 0)
        // {
        //     steering.div(total)
        //     steering.sub(this.position)
        //     .setMag(this.maxSpeed)
        //     steering.sub(this.vel)
        //     steering.limit(this.maxForce)
        // }

        // return steering
    }


    separation(boids)
    {
        // let perceiveRadius = 45
        // let steering = createVector()
        // let total = 0

        // for (let other of boids)
        // {
        //     let distance = dist(
        //         this.position.x, 
        //         this.position.y, 
        //         other.position.x, 
        //         other.position.y)

        //     if (other != this && distance < perceiveRadius)
        //     {
        //         let diff = p5.Vector.sub(this.position, other.position)
        //         diff.div(distance)

        //         steering.add(diff)
        //         total++
        //     }
        // }

        // if (total > 0)
        // {
        //     steering.div(total)
        //     steering.setMag(this.maxSpeed)
        //     steering.sub(this.vel)
        //     steering.limit(this.maxForce)
        // }

        // return steering
    }


    flock(boids)
    {
        // let alignment = this.align(boids)
        // let cohesion = this.cohesion(boids)
        // let separation = this.separation(boids)

        // separation.mult(separationSlider.value())
        // alignment.mult(alignSlider.value())
        // cohesion.mult(cohesionSlider.value())

        // this.accel.add(separation)
        // this.accel.add(cohesion)
        // this.accel.add(alignment)
    }

    update()
    {
        // this.position.add(this.vel)
        // this.vel.add(this.accel)
        // this.accel.mult(0)

        this.position = createVector(mouseX, mouseY)

        this.vel = createVector(mouseX, mouseY)

        //this.vel.setMag(2)

    }

    show()
    {
        strokeWeight(25)
        stroke(0)
        point(this.position.x, this.position.y)
    }

    edges()
    {
        // if (this.position.x > width) this.position.x = 0
        // if (this.position.x < 0) this.position.x = width
        // if (this.position.y > height) this.position.y = 0
        // if (this.position.y < 0) this.position.y = height
    }
}