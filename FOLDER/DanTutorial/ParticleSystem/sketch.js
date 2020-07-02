let particles = []

function setup()
{
    colorMode(RGB, 1)
    createCanvas(600, 400)


}

function draw()
{
    background(0)


    let p = new Particle()

    particles.push(p)

    for (let i = particles.length -1; i >= 0 ; i--)
    {
        particles[i].update()
        particles[i].show()

        if (particles[i].finished())
        {
            particles.splice(i, 1)
        }
    }


}

function Particle()
{
    this.x = 300
    this.y = 380

    this.vx = random(-2, 2)
    this.vy = random (-5, -1)

    this.alpha = 1

    this.update = function()
    {
        this.x += this.vx
        this.y += this.vy
        this.alpha -= 0.011
    }

    this.finished = function()
    {
        return this.alpha < 0
    }






    this.show = function()
    {
        noStroke()
        fill(1, this.alpha)
        ellipse(this.x, this.y, 16)
    }



}
