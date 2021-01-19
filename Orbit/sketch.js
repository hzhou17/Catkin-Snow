
let stars = []

let mic;

let mappedVol

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(RGB, 1);

    background(0)

    userStartAudio();

    mic = new p5.AudioIn();
    mic.start();




  for (let i = 0; i < 150; i++) 
  {
    stars.push(new Star())
  }

  //print(window.innerWidth);

}


function draw()
{
    let vol = mic.getLevel();
    //print(vol);

	mappedVol = map(vol, 0, 0.4, 0.5, 5)



	background(0)

	noStroke()

	//if (frameCount % 60 == 0) print(frameRate())



	for (let i = 0; i < stars.length; i++) 
	{
	    //stars[i].show();
	    stars[i].update();
	}

}