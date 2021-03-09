//https://editor.p5js.org/arielee/sketches/68kV8PHKC



let flock = [], particles1 = [], particles2 = []


let alignSlider, cohesionSlider, separationSlider, rotateSlider


let attract = false, gather = true


let run_time = 0


let mic, vol, mapped_vol


function setup() 
{ 
  createCanvas(window.innerWidth, window.innerHeight)
  colorMode(RGB, 1)


  angleMode(DEGREES)

//1, 0.5, 0.5
  // alignSlider = createSlider(0, 5, 1, 0.1)
  // cohesionSlider = createSlider(0, 5, 0.5, 0.1)
  // separationSlider = createSlider(0, 5, 0.5, 0.1)


//--------------------------------------------------------------
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
//--------------------------------------------------------------




  for(let i=0; i<8; i++)    //8
  {
      flock.push(new Boid())
  }

    flock.push(new Mouse())


} 

function draw() 
{ 
  run_time = floor(millis() / 1000 + 1)
//--------------------------------------------------------------
  vol = mic.getLevel()
  vol *= 10

  mapped_vol = map(vol, 0, 0.1, 0, 20)
  if ( mapped_vol > 150) mapped_vol = 150
//--------------------------------------------------------------

  //print(mapped_vol)






  background(0)
  color_gradient(5)

// push()
// fill(1)

// text("align: " + alignSlider.value(), 10, 10)

// text("cohesion: "+ cohesionSlider.value(), 10, 30)

// text("separate: "+ separationSlider.value(), 10, 50)
// pop()

   push()

    if (frameCount % 100 == 0)
    particles1.push(new Particle1())


  
  for (let i = particles1.length - 1; i >= 0; i--) 
  {
    particles1[i].update()
    particles1[i].show()
    if (particles1[i].finished()) 
    {
      particles1.splice(i, 1)
    }
  }

pop()


  seaFloor1() //lowest
  seaFloor2()

  push()
    fill(0.72)
    ellipse(width/3.3, height*0.725, 130, 30)
    //ellipse(width/3, height*0.5, 20, 20)
  pop()

  seaFloor3()



  weed1()
  weed2()
  weed3()

















  //weed4()
  //rect(width*0.33, 0, 5, height)

// push()
//drawFish(width/2, height/2, 0, 0)
// pop()

    for (let boid of flock)
    {
        //if (boid != leader)
        {
            boid.self()
            boid.edges()

            boid.flock(flock)
            boid.update()

        }
            boid.show()
    }






  push()
    if (frameCount % 60 == 0)
    particles2.push(new Particle2())


  
  for (let i = particles2.length - 1; i >= 0; i--) 
  {
    particles2[i].update()
    particles2[i].show()
    if (particles2[i].finished()) 
    {
      particles2.splice(i, 1)
    }
  }

pop()





}





// function mousePressed()
// {
//   if (mouseX < width && mouseY < height)
//   {
//       attract = !attract
//   }
// }


function keyPressed() 
{
  if (keyCode === UP_ARROW) 
  {
    gather = !gather
    attract = false
  } 


  if (keyCode === DOWN_ARROW)
  {
    attract = !attract
    gather = false
  }

  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)
  {
    attract = false
    gather = false
  }
}








