
let stars = []

// let mic;

// let mappedVol


let playing

let all_angle

let play = false;

let max_radius, min_radius = 50

let max_life = 5.75

let increase=false, decrease=false


let run_time = 0

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);
    //createCanvas(600, 600);

    colorMode(RGB, 1);

    background(0)

    // userStartAudio();

    // mic = new p5.AudioIn();
    // mic.start();

    all_angle = PI/4
    max_radius = height*0.5*0.95


  for (let i = 0; i < 1; i++) 
  {
    stars.push(new Star())
  }


}


function draw()
{

  run_time = floor(millis()/1000 + 1)

  if (frameCount % 60 == 0)
  {
    //print(frameRate())

    //print(max_radius)

    //print(stars.length);

    //stars.push(new Star())

    print(run_time)
  }




  if (run_time % 8 == 0)
  {
  	//print("gehuisghosghowe")

    decrease = true
    increase = false
  }

  if (run_time % 15 == 0)
  {
  	//print("gehuisghosghowe")

    decrease = false
    increase = true
  }









  if (increase && max_radius < height*0.5*0.95) max_radius += 1.5
  if (decrease && max_radius > 53) max_radius -= 0.75



 //  let vol = mic.getLevel();
 //    //print(vol);

	// mappedVol = map(vol, 0, 1, 1, 100)



	if (max_radius < 53)
	{
		if (frameCount % 3 == 0) stars.push(new Star())
	}
	else stars.push(new Star())




	background(0)

	noStroke()

	//if (frameCount % 60 == 0) print (mappedVol) //print(frameRate())


	for (let i = 0; i < stars.length; i++) 
	{
	    stars[i].update();

      //if (stars[i].radius >= stars[i].max_r && stars[i].life > max_life)
		if (stars[i].life > max_life)
      {
        stars.splice(i, 1)
      }

      //if (i == 0 && frameCount % 40 == 0)  print(stars[0].alpha)



	}

}




function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    playing = false
  }


  if(keyCode === RIGHT_ARROW)
  {
    playing = true
  }

  if(keyCode === DOWN_ARROW)
  {
    decrease = true
    increase = false
  }

  if(keyCode === UP_ARROW)
  {
    decrease = false
    increase = true
  }
}