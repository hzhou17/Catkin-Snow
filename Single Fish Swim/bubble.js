class Particle1 
{
  constructor() 
  {
    this.x = random(200, 250);
    this.y = height-200;
    this.x_vel = random(-0.5, 0.5);
    this.y_vel = random(-1.2, -1);

    this.y_vel_accel = random(0.01)


    this.alpha = 1;

    this.size = 12
    this.size_up = random(0.15)

  }

  finished() 
  {
    return this.alpha < 0;
  }

  update() 
  {
    this.y_vel -= this.y_vel_accel


    this.x += this.x_vel;
    this.y += this.y_vel;
    this.alpha -= 0.003;
  }

  show() 
  {
    stroke(1)

    this.size += this.size_up

    fill(0.9, 0.95, 0.96, this.alpha);
    ellipse(this.x, this.y, this.size);


    // fill(0.2, this.alpha)
    // ellipse(this.x, this.y, this.size, this.se)

    // fill(0.8, this.alpha)
    // ellipse(this.x, this.y-2, this.size-4, this.size-7)

    // fill(1, this.alpha)
    // noStroke()
    // ellipse(this.x-9, this.y-13, this.size-10, this.size-10)
  }
}




class Particle2 
{
  constructor() 
  {
    this.x = random(600, 250);
    this.y = height-200;
    this.x_vel = random(-0.5, 0.5);
    this.y_vel = random(-1.5, -1);

    this.y_vel_accel = random(0.01)


    this.size = 10
    this.size_up = random(0.15)

    this.size += mapped_vol

    this.alpha = map(this.size, 10, 160, 0.6, 0.3) //160=10 + max_vol

  }

  finished() 
  {
    return this.y < -50
  }

  update() 
  {
    this.y_vel -= this.y_vel_accel


    this.x += this.x_vel
    this.y += this.y_vel
    this.alpha -= 0.003

    this.size += this.size_up
  }

  show() 
  {

    stroke(1)


    fill(0.9277, 0.95, 0.96, this.alpha);
    ellipse(this.x, this.y, this.size);


    // fill(0.2, this.alpha)
    // ellipse(this.x, this.y, this.size, this.se)

    // fill(0.8, this.alpha)
    // ellipse(this.x, this.y-2, this.size-4, this.size-7)

    // fill(1, this.alpha)
    // noStroke()
    // ellipse(this.x-9, this.y-13, this.size-10, this.size-10)





  }
}