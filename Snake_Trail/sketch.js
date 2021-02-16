
let stars = []

let mic;

let mappedVol

let playing

let pos_X = 300
let pos_Y = 300

function setup()
{
    createCanvas(600, 600);
    colorMode(RGB, 1);

    background(0)

    userStartAudio();

    mic = new p5.AudioIn();
    mic.start();




  for (let i = 0; i < 1; i++) 
  {
    stars.push(new Star())
  }

  //print(window.innerWidth);

}


function draw()
{
    let vol = mic.getLevel();
    //print(vol);

	mappedVol = map(vol, 0, 1, 1, 100)



	background(0)

	noStroke()

  keyPressed()

	//if (frameCount % 60 == 0) print (mappedVol) //print(frameRate())



	for (let i = 0; i < stars.length; i++) 
	{
	    //stars[i].show();
	    stars[i].update();
	}

}



function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    pos_X -= 4
  }


  if(keyCode === RIGHT_ARROW)
  {
    pos_X += 4
  }

  if(keyCode === DOWN_ARROW)
  {
    pos_Y += 4
  }

  if(keyCode === UP_ARROW)
  {
    pos_Y -= 4
  }
}