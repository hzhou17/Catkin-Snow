
let stars = []

let mic;

let mappedVol

let playing

let all_angle

let play = false;

let max_radius

let max_life = 8

let increase=false, decrease=false

function setup()
{
    //createCanvas(window.innerWidth, window.innerHeight);
    createCanvas(600, 600);

    colorMode(RGB, 1);

    background(0)

    userStartAudio();

    mic = new p5.AudioIn();
    mic.start();

    all_angle = PI/4
    max_radius = 300


  for (let i = 0; i < 1; i++) 
  {
    stars.push(new Star())
  }

  //print(window.innerWidth);

  print(random(50, 50))

}


function draw()
{
  if (frameCount % 60 == 0)
  {
    print(frameRate())

    //print(max_radius)

    print(stars.length);

    //stars.push(new Star())
  }


  if (increase && max_radius < 300) max_radius += 2
  if (decrease && max_radius > 53) max_radius -= 0.75



 //  let vol = mic.getLevel();
 //    //print(vol);

	// mappedVol = map(vol, 0, 1, 1, 100)



  if (frameCount % 2 == 0)
  {
    stars.push(new Star())
  }


	background(0)

	noStroke()

	//if (frameCount % 60 == 0) print (mappedVol) //print(frameRate())


	for (let i = 0; i < stars.length; i++) 
	{
	    stars[i].update();

      if (stars[i].radius >= stars[i].max_r && stars[i].life > max_life)
      {
        stars.splice(i, 1)
      }
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