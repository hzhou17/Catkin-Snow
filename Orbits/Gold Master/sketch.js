let stars = []


let max_radius, min_radius = 50
let current_min_radius, current_max_radius

let max_life = 6

let increase = false, decrease = false, inward = false

let inward_timer = 0


let run_time = 0


let canvas_max

let de_speed = 1, decel = 0.001



//----------
function setup() 
{
  createCanvas(window.innerWidth, window.innerHeight);

  colorMode(RGB, 1);

  background(0)

  canvas_max = height * 0.5 * 0.95

  max_radius = canvas_max




}


function draw() 
{
    background(0)
    noStroke()

//---------------------------------------------------------------    

  

//---------------------------------------------------------------  
   run_time = floor(millis() / 1000 + 1)


  if (run_time % 7 == 0) {
    decrease = true
    increase = false
  }

  if (run_time % 15 == 0) {
    decrease = false
    increase = true
  }
  
  if (run_time % 25 == 0)
  {
    inward = true
    
  }
  
  if (inward) inward_timer += 1/frameRate()
  
  
  if (inward_timer > 10)
  {
    inward = false
    inward_timer = 0
  }
//---------------------------------------------------------------    

  if (increase && max_radius < canvas_max)
  {
    max_radius += 1.5

    de_speed = 1
  } 


  if (decrease && max_radius > 53)
  {
    max_radius -= de_speed

    if (de_speed>0.1) de_speed -= decel

  } 


  if (max_radius < 53) 
  {
    if (frameCount % 3 == 0) 
    {
      stars.push(new Star())
    }
  } 
  else stars.push(new Star())



  for (let i = 0; i < stars.length; i++) 
  {
    
    if (stars[i].life > max_life) 
    {
      stars.splice(i, 1)
    }
    
    stars[i].update();
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    decrease = true
    increase = false
  }

  if (keyCode === UP_ARROW) {
    decrease = false
    increase = true
  }
}




class Star {
  constructor() {
    this.initSize = random(2, 5)

    this.size = 0 // give it a value, so it's not null

    this.radius = random(min_radius, max_radius)

    //this.alpha = 1
    this.current_alpha = 0

    this.angle = random(0, 2 * PI)
    this.initSpeed = random(0.001, 0.018)

    this.trail = []


    this.color = random()

    this.max = this.radius / 25

    this.life = 0;

    // this.decel = 0.01
    // this.
  }

  update() 
  {
    if (max_radius < 53) 
    {
      this.initSpeed = 0.002
    }

    this.r_remap = map(this.radius, min_radius, max_radius, 0.7, 1)
    
    
    if (inward && this.r_remap > 1) this.r_remap = 1


    this.max_r = max_radius * this.r_remap


    if (this.radius < this.max_r) 
    {
      if (decrease && max_radius > 53) 
      {
        this.radius += 2;
      } 
      else 
      {
        this.radius += 0.75;
      }
    }


    this.life += 1 / frameRate()

    if (this.life > 2) 
    {
      this.current_alpha -= 1 / ((max_life - 2) * frameRate())
    } 
    else if (this.current_alpha <= 1) 
    {
      this.current_alpha += 0.015
    }


    this.angle += this.initSpeed


    this.x = width / 2 + this.radius * Math.cos(this.angle)
    this.y = height / 2 + this.radius * Math.sin(this.angle)


    this.trail.push([this.x, this.y])

    for (let i = this.trail.length; i > 0; i--) 
    {
      if (this.color > 0.6) fill(0.7, 0.17, 0.17, this.current_alpha)
      else fill(1, this.current_alpha);


      ellipse(this.trail[i - 1][0], this.trail[i - 1][1], this.size)

      if (this.trail.length > this.max) {
        this.trail.splice(0, 1);
        //this.alpha = this.current_alpha
        this.size = this.initSize;
      }
      //this.current_alpha = i
      if (this.size > 0.1) this.size -= 0.1
    }
  }
}