class Particle
{
  constructor(x, y)
  {
    this.pos = createVector(x, y)
    this.vel = p5.Vector.random2D()
    this.vel.setMag(random(2,5))
    this.acc = createVector()
  }



  update()
  {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
  }








  show()
  {
    stroke(1, 0.1)
    strokeWeight(4)
    point(this.pos.x, this.pos.y)

  }


  attracted(target)
  {
    let force = p5.Vector.sub(target, this.pos)
    let distanceSquared = force.magSq()

    distanceSquared = constrain(distanceSquared, 25, 500)



    let G = 6.67408
    let strength = G / distanceSquared
    force.setMag(strength)

    this.acc = force

  }
}