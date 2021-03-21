class Boid
{
    constructor()
    {
        this.position = createVector(random(100, width-100), 
            random(200, height-100))

        this.vel = p5.Vector.random2D(-0.2, 0.2)

                // this.vel = p5.Vector.random2D(-0.01, 0.01)

                // print(this.vel.heading())

        this.vel.y = this.vel.x * random(-0.1, 0.1)
                //print(this.vel.x/this.vel.y)


        this.vel.setMag(random(0.5, 2))
        this.accel = createVector()
        this.maxForce = 0.1
        this.maxSpeed = 3
        this.id = 0

        this.alone_timer= 0

        this.scaleX = random(0.95, 1.05)
        this.scaleY = random(0.95, 1.03)

        this.level = false

        // this.current_rotate = 0
        // this.rotate_pct = 0

        this.adjustment_interval = floor(random(350, 500))
    }


    self()
    {
        if (this.alone_timer > 3 || this.alone_timer < -1)
        {
            if (abs(this.vel.x/this.vel.y) < 10)
            {   
                this.level = true
                this.vel.x *= 1.02
            }


            if (mag(this.vel.x, this.vel.y) > 2)
            {
                let new_mag = mag(this.vel.x, this.vel.y) * 0.95

                this.vel.setMag(new_mag)
            }
        }




        // if (gather && this.alone_timer < -3)
        // {
        //     if (mag(this.vel.x, this.vel.y) > 1)
        //     {
        //         let new_mag_2 = mag(this.vel.x, this.vel.y) * 0.95

        //         this.vel.setMag(new_mag_2)
        //     }
        // }


        // if (this.alone_timer > 3)
        // {
        //     if (frameCount%200==0)
        //     {   
        //         let new_mag_3 = mag(this.vel.x, this.vel.y) * random(0.85, 1.2)

        //         this.vel.setMag(new_mag_3)


        //     }



        // }






    }

    vary(boids)
    {
        let steering = createVector()


        if (gather == false && attract == false)

        {
            if (frameCount%this.adjustment_interval==0 && 
            (this.alone_timer > 3 || this.alone_timer < -3))
        {
            let vary = p5.Vector.random2D(0.3)

            steering.add(vary)

            //print("sdhuogiui90dfg")
        }
        }



        return steering


    }




    align(boids)
    {
        let perceiveRadius = 150

        let steering = createVector()

        let total = 0


        for (let other of boids)
        {
            let distance = dist(
                this.position.x, 
                this.position.y, 
                other.position.x, 
                other.position.y)

            if (other != this && other.id == 0 && distance < perceiveRadius)
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

        //print(steering.mag())

        return steering
    }


    cohesion(boids)
    {
        let perceiveRadius = 100
        let steering = createVector()
        let total = 0

        for (let other of boids)
        {
            let distance = dist(
                this.position.x, 
                this.position.y, 
                other.position.x, 
                other.position.y)

            if (other != this && other.id == 0 && distance < perceiveRadius)
            {
                steering.add(other.position)
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
        let perceiveRadius = 100
        let steering = createVector()
        let total = 0

        for (let other of boids)
        {
            let distance = dist(
                this.position.x, 
                this.position.y, 
                other.position.x, 
                other.position.y)

            if (other != this && other.id == 0 && distance < perceiveRadius)
            {
                let diff = p5.Vector.sub(this.position, other.position)
                diff.div(distance)

                steering.add(diff)
                total++
            }
        }

        if (total > 0)
        {
            steering.div(total)
            steering.setMag(this.maxSpeed)
            steering.sub(this.vel)
            steering.limit(0.2)
        }

        return steering
    }

    follow(boids)
    {
        if (attract)
        {
            let steering = createVector()

            let end = createVector(mouseX, mouseY)


            let begin = createVector(this.position.x, this.position.y)


            let diff = end.sub(begin)

            let distance = dist(this.position.x, this.position.y,
                                mouseX, mouseY)


            if (end.x < width && end.y < height && distance > 100)
            {
                diff.setMag(distance*0.0001)

                steering.add(diff)

                steering.limit(1)
            }

            if (distance < 100)
            {
                steering.setMag(0.01)
            }


            return steering
        }
    }


    gather_at_weed(boids)
    {
        if (gather)
        {
            let steering = createVector()

            let end = createVector(width/3, height*0.5)


            let begin = createVector(this.position.x, this.position.y)


            let diff = end.sub(begin)

            let distance = dist(this.position.x, this.position.y,
                                400, 500)


            if (distance > 150)
            {
                diff.setMag(distance*0.0001)

                steering.add(diff)

                steering.limit(1)
            }

            if (distance < 150)
            {
                this.vel.setMag(0.5)
                steering.setMag(0.005)
            }


            return steering
        }
    }



    flock(boids)
    {
        let alignment = this.align(boids)
        let cohesion = this.cohesion(boids)
        let separation = this.separation(boids)
        let follow = this.follow(boids)
        let gather = this.gather_at_weed(boids)
        let vary = this.vary(boids)

        // separation.mult(separationSlider.value())
        // alignment.mult(alignSlider.value())
        // cohesion.mult(cohesionSlider.value())



        separation.mult(1)
        alignment.mult(0.5)
        cohesion.mult(0.5)

        this.accel.add(separation)
        this.accel.add(cohesion)
        this.accel.add(alignment)
        this.accel.add(follow)
        this.accel.add(gather)
        this.accel.add(vary)
        //print(this.accel)

        if (this.alone_timer < 10 && this.accel.mag() == 0)
        {
            this.alone_timer += 1/60
        }

        if (this.alone_timer > -10 && this.accel.mag() != 0)
        {
            this.alone_timer -= 1/60
        }


    }

    update()
    {
        this.position.add(this.vel)
        this.vel.add(this.accel)
        this.accel.mult(0)
    }

    show()
    {
        push()

            translate(this.position.x, this.position.y)
            scale(0.7, 0.7)
            scale(this.scaleX, this.scaleY)

            let theta = this.vel.heading();
            theta = degrees(theta)


            //print(theta)

            // this.rotate_pct += 1/60

            // this.current_rotate = this.current_rotate + this.rotate_pct*(theta-this.current_rotate)

            //print(this.vel)


            // if (theta > 0 && this.current_rotate < theta)
            // {
            //     this.current_rotate += 10
            // }

            // if (theta < 0 && this.current_rotate > theta)
            // {
            //     this.current_rotate -= 10
            // }

            


            // rotate(this.current_rotate)


            rotate(theta)



              if (theta > 90 || theta < -90)
            {
                scale(-1, 1)


                rotate(180)
            }

              fish(0, 0, abs(this.vel.x)/2, abs(this.vel.y)/2)

        pop()

        //print(this.position.x)
    }

    edges()
    {
        // if (this.position.x > width-30 || this.position.x < 30)
        // {
        //     this.vel.x = this.vel.x * -0.8
        // } 

        // if (this.position.y > height-30 || this.position.y < 30)
        // {
        //     this.vel.y = this.vel.y * -0.8
        // } 

        if (this.position.x > width+200) this.position.x = 0
        if (this.position.x < -200) this.position.x = width
        if (this.position.y > height+200) this.position.y = 0
        if (this.position.y < -200) this.position.y = height
    }
}