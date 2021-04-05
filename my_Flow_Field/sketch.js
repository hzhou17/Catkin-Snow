let vectors = []

let dot

let size = 50

let xoff, yoff

let increment = 0.2

//let angle = 0

let zoff = 0
// #################################################################
// #################################################################
// #################################################################
function setup()
{


  createCanvas(window.innerWidth, window.innerHeight);

  colorMode(RGB, 1);


  cols = width/size
  rows = height/size

  xoff = 0
  for (var x = 0; x < cols; x++)
  { 
      yoff = 0
      for (var y = 0; y < rows; y++)
      {   
          vectors.push(new Vector(x*size, y*size))

          //rect(x*size, y*size, size, size)

          yoff += increment
          //angle += increment
      }

      xoff += increment
  }




  dot = new Boid()

  dot.show()


  print(dot.pos.x)

}










function draw()
{
  background(1)
  zoff += 0.001

  //print(zoff)

  for (let i of vectors)
  {

    i.show()
  }




  dot.show()
  dot.edge_loop()


}



class Vector
{
  constructor(x, y)
  {
    this.x = x
    this.y = y

    this.angle = noise(xoff, yoff, zoff) * TWO_PI

    //this.angle = sin(angle*0.2)
    this.pos = p5.Vector.fromAngle(this.angle)
  }


  show()
  {
    this.angle = noise(xoff, yoff, zoff) * TWO_PI

    push()

      translate(this.x + 0.5*size, this.y + 0.5*size)
      rotate(this.pos.heading()+PI/2)

      rect(0, 0, 2, size/2)

    pop()
  }
}


class Boid
{
  constructor()
  {
    this.pos = createVector(random(width), random(height))

  }

  show()
  {
    fill(0, 0.1)
    ellipse(this.pos.x, this.pos.y, 10)

    this.loc_x = floor(this.pos.x/size)*size
    this.loc_y = floor(this.pos.y/size)*size


    for (let i of vectors)
    {
        if (i.x == this.loc_x && i.y == this.loc_y)
        {
            this.vel = createVector(i.pos.x, i.pos.y)
        }  
    }

    //this.vel.setMag(3)


    this.pos.add(this.vel)
  }


  edge_loop()
  {
    if (this.pos.x > width) this.pos.x = 0
    if (this.pos.x < 0)     this.pos.x = width
    if (this.pos.y > height) this.pos.y = 0
    if (this.pos.y < 0) this.pos.y = height
  }




}









// ################################################################
// ################################################################
// ################################################################
