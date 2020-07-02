// let particles = []

let p1
let p2

function setup()
{
    colorMode(RGB, 1)
    createCanvas(600, 400)


    p1 = new Particle(300, 300)

    // particles.push(p)

    p2 = new Square(300, 300)
}

function draw()
{
    background(0)


    //for (let i = particles.length -1; i >= 0 ; i--)
    {
        // particles[i].update()
        // particles[i].show()
        p1.update()
        p1.show()

        p2.update()
        p2.show()

        // if (particles[i].finished())
        // {
        //     particles.splice(i, 1)
        // }
    }

}

// function Particle()
// {
//     this.x = 300
//     this.y = 380

//     this.vx = random(-2, 2)
//     this.vy = random (-5, -1)

//     this.alpha = 1

//     this.update = function()
//     {
//         this.x += this.vx
//         this.y += this.vy
//         this.alpha -= 0.011
//     }

//     this.finished = function()
//     {
//         return this.alpha < 0
//     }



//     this.show = function()
//     {
//         noStroke()
//         fill(1, this.alpha)
//         ellipse(this.x, this.y, 16)
//     }



// }
