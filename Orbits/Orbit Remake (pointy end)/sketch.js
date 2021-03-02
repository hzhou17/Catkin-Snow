let stars = []

let playing

let max_radius, min_radius = 50

let max_life = 5.75

let increase = false, decrease = false, inward = false

let inward_timer = 0

let run_time = 0


function setup() 
{
  createCanvas(window.innerWidth, window.innerHeight);

  colorMode(RGB, 1);

  background(0)

  max_radius = height * 0.5 * 0.95
}


function draw() 
{
  background(0)
  noStroke()
  
  run_time = floor(millis() / 1000 + 1)


  if (run_time % 8 == 0) {
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
  


  if (increase && max_radius < height * 0.5 * 0.95) max_radius += 1.5
  if (decrease && max_radius > 53) max_radius -= 0.75


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
