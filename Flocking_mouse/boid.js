class Boid
{
    constructor()
    {
        this.position = createVector(random(width), 
            random(height))
        this.vel = p5.Vector.random2D()
        this.vel.setMag(random(2, 4))
        this.accel = createVector()
        this.maxForce = 0.2
        this.maxSpeed = 4

        this.color = random()
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



            if (other != this && distance < 200)
            {
                // let diff = p5.Vector.sub(this.position, other.position)



                // diff.div(distance)

                if (other instanceof Leader)
                {
                    steering.add((mouseX - this.position.x, mouseY - this.position.y))


                }  


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







                // if (other instanceof Leader)
                // {
                //     steering.add(other.position)
                //     steering.add(other.position)
                //     steering.add(other.position)
                //     steering.add(other.position)
                //     steering.add(other.position)
                //     steering.add(other.position)
                //     steering.add(other.position)
                //     steering.add(other.position)
                //     steering.add(other.position)
                //     steering.add(other.position)
                // }   




                total++
            }
        }

        if (total > 0)
        {
            steering.div(total)
            steering.sub(this.position)
            .setMag(this.maxSpeed)
            steering.sub(this.vel)
            steering.limit(this.maxForce)
        }

        return steering
    }


    separation(boids)
    {
        let perceiveRadius = 80
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
                let diff = p5.Vector.sub(this.position, other.position)
                diff.div(distance)




                if (other instanceof Obstacle)
                {
                    diff.mult(10000)
                    steering.add(diff)   
                }
                else
                {
                    steering.add(diff)  
                }       

              

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


    flock(boids)
    {
        let alignment = this.align(boids)
        let cohesion = this.cohesion(boids)
        let separation = this.separation(boids)

        separation.mult(separationSlider.value())
        alignment.mult(alignSlider.value())
        cohesion.mult(cohesionSlider.value())

        this.accel.add(separation)
        this.accel.add(cohesion)
        this.accel.add(alignment)
    }

    update()
    {
        this.position.add(this.vel)
        this.vel.add(this.accel)
        this.accel.mult(0)
    }

    show()
    {
        //strokeWeight(5)
        noStroke()
        if (this.color > 0.5) fill(1, 0, 0)
        else fill(0, 0, 1)



        //stroke(1)
        ellipse(this.position.x, this.position.y, 5, 5)
    }

    edges()
    {
        if (this.position.x > width) this.position.x = 0
        if (this.position.x < 0) this.position.x = width
        if (this.position.y > height) this.position.y = 0
        if (this.position.y < 0) this.position.y = height
    }
}