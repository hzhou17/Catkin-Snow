var buildingList = []

var windowList = []

var storeyList = []

var num = 10; //number of buildings



function setup()
{
	colorMode(RGB, 1);
	createCanvas(1280, 720);
	background(0.5)

	color_gradient(40)
// #############################################################################################
//Put Objects into their Arrays

	// for (var i = 0; i < 10; i++)         //put BUILDINGS into its Array
	// {
	// buildingList[i] = new Building00(i); //(noise_index)
	// }


	// for (var i = 0; i < 10; i++)         //put WINDOWS into its Array
	// {
	// windowList[i] = new Windows00(buildingList[i].x, buildingList[i].y,
	//                             buildingList[i].offset, buildingList[i].ratio);
	// }

	// for (var i = 0; i < 10; i++)         //put WINDOWS into its Array
	// {
	// storeyList[i] = new Storey00(buildingList[i].x, buildingList[i].y,
	//                              buildingList[i].offset, i);
	// }


// #############################################################################################
//Call functions.



//building_layer(0, -200, 1, 1)

// print(floor(random(0, 5))+1)
 // #############################################################################################
}


function draw()
{
building_layer(0, 0, 1, 1)

  // windowList[0].show();
  //storeyList[0].show();
}


function Building00(noise_index)
{
    this.x = noise(noise_index * .8) * width/3.5;
    this.y = noise(noise_index * .8 + 100) * height * 1.5;

    this.ratio = this.y / this.x;

    if (this.ratio  > 50 ) //if a building is too thin
    {
      this.x *= map(this.ratio, 0, 150, 0, 100);
    }

    this.offset = 0;

    this.offset += this.x ;

    this.show = function()
    {
      this.color = map(noise(noise_index*0.2), 1, 0, 0.4, 0)	//*.2 to reduce frequency, so that color doesn't change too much across the scene

      fill(this.color)

      rect(this.x, this.y, this.x, height)

      translate(this.offset, 0)
    }
}







function color_gradient(thickness) //thickness of a subdivision. The thinner, the smoother.
{                            
    for (i = 0; i < height; i+= thickness)
    {
      var R = map(i, 0, height, 0, 0.5);
      var G = map(i, 0, height, 0.1, 0.2);
      var B = map(i, 0, height, 0.5, 0.6);


      push();

        fill(R, 0.1, B); //purple

        noStroke()  

        rect(0, i, width, thickness);

      pop();
    }
}

function additional_translateX(i)
{
    if (i < buildingList.length -1)
	{
  		if ((buildingList[i+1].x) < (buildingList[i].x))
	    {
	      translate((buildingList[i].x) - (buildingList[i+1].x), 0)
	    }
	}
}

function building_layer(tX, tY, sX, sY)
{
	for (var i = 0; i < 10; i++)         //put BUILDINGS into its Array
	{
	buildingList[i] = new Building00(i); //(noise_index)
	}


	for (var i = 0; i < 10; i++)         //put WINDOWS into its Array
	{
	windowList[i] = new Windows00(buildingList[i].x, buildingList[i].y,
	                            buildingList[i].offset, buildingList[i].ratio);
	}

	for (var i = 0; i < 10; i++)         //put WINDOWS into its Array
	{
	storeyList[i] = new Storey00(buildingList[i].x, buildingList[i].y,
	                             buildingList[i].offset, i);
	}










	push()	
	translate(tX, tY)
	scale(sX, sY)

	push()
	  for (var i = 0; i < num; i++)
	  {

	  		buildingList[i].show();

  		 	additional_translateX(i)

	  }
	pop()


	push()
		for (var i = 0; i < num; i++)
		{
			
			windowList[i].show()

	  		additional_translateX(i)

		}
	pop() 


	push()
		for (var i = 0; i < num; i++)
		{
			storeyList[i].show();

			additional_translateX(i)
		}
	pop() 

	pop()
}