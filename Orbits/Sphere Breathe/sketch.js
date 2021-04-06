let stars = []



let max_radius, min_radius = 50
let current_min_radius, current_max_radius

let max_life = 5.75

let increase = false, decrease = true, inward = false

let inward_timer = 0


let run_time = 0

//----------
let mic 
let playing = false
let variable = false

let radius_duration = 0 //4 in, 7 hold, 8 out
let timer_duration = 0
let canvas_max

let idle_timer = 0

let flip = true

//----------
function setup() 
{
  createCanvas(window.innerWidth, window.innerHeight);

  colorMode(RGB, 1);

  background(0)

  canvas_max = height * 0.5 * 0.95

  max_radius = canvas_max


  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();

}


function draw() 
{
    background(0.77, 0.88, 0.96)
    noStroke()


    // push()

    //   translate(width/2, height/2)

    //   let circle_num = 0

    //   for (let i=height; i>0; i-=height/10)
    //   {

    //       circle_num += 1

    //       // if (circle_num==1) fill(1)
    //       // else 
    //       let remap_i = map(i, height, 0, 1, 0.9)

    //       //fill(0.77, 0.88, remap_i)

    //       fill(i/height)

    //       ellipse(0, 0, i, i)

    //   }


    // pop()












//---------------------------------------------------------------  
push()
fill(0)

//text("playing: " + playing.toString(), 10, 10)

//text("flip: "+ flip.toString(), 10, 30)

text("Inhaling: "+ increase.toString(), 15, 50)
text("Exhaling: "+ (!increase).toString(), 15, 80)
// if (increase && playing) text("Inhaling", 10, 10)
// if (decrease && playing) text("Exhaling", 10, 50)

pop()




//---------------------------------------------------------------    

    current_max_radius = map(radius_duration, 0, 4, 50, canvas_max)
    //current_min_radius = map(radius_duration, 0, 6, canvas_max, 53)




    //---------------------------------------------------------------  

    let vol = mic.getLevel();

    vol *= 100


    if (vol > 0.13)
    {
        playing = true

        if (radius_duration < 4)
        {
            radius_duration += 1/frameRate()
            timer_duration += 1/frameRate() 

        }  

        idle_timer = 0
    }
    else
    {
      playing = false
      timer_duration = 0

      if (radius_duration - 1/frameRate() > 0)
      {
        radius_duration -= 1/frameRate()
      }

      idle_timer+=1/frameRate()
    }


    // if (idle_timer > 5)
    // {
    //   increase = false
    //   decrease = true
    // }

    if (idle_timer > 2) flip = true



    if (frameCount%60==0) 

    {
      //print(duration)
      //print(current_min_radius)
      print(vol)
    }
    

    //print(1/frameRate())


    if (flip && timer_duration > 0.08 && playing)
    {
      //print("dsgdgdshfh")


      increase = !increase
      decrease = !decrease

    	let random_value = random()

      if (random_value > 0.5) inward = false
      else inward = true

      flip  = false


    }

    //if (vol > 0.3) variable = true


    //print(current_max_radius)


//---------------------------------------------------------------  
   run_time = floor(millis() / 1000 + 1)


//   if (run_time % 8 == 0) {
//     decrease = true
//     increase = false
//   }

//   if (run_time % 15 == 0) {
//     decrease = false
//     increase = true
//   }
  
//   if (run_time % 25 == 0)
//   {
//     inward = true
    
//   }
  
//   if (inward) inward_timer += 1/frameRate()
  
  
//   if (inward_timer > 10)
//   {
//     inward = false
//     inward_timer = 0
//   }
//---------------------------------------------------------------    

  if (increase && max_radius < current_max_radius) max_radius += 1.5


  if (decrease && max_radius > 53) max_radius -= 1.5


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

