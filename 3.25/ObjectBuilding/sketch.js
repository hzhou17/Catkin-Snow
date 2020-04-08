var buildingList = []

var windowList = []

var storeyList = []

var particlesList = []

var num = 10; //number of buildings


function setup()
{
	colorMode(RGB, 1);
	createCanvas(1280, 720);
	background(0.5)

	color_gradient(40)	
// #############################################################################################
//Put Objects into their Arrays
	for (var i = 0; i < 20; i++) 
	{
		particlesList[i] = new Particles00();
	}


// #############################################################################################
//Call functions.
push()
translate(-200, -50)
scale(0.8, 0.8)

building_layer(0, 0, 1)//(iStart, windows, darkness), backgound layer

pop()


 //front layer


 // #############################################################################################
}


function draw()
{

	  noStroke();
  for (var i = 0; i < particlesList.length; i++)
  {
  		//particlesList.scale += 0.1;


  		particlesList[i].show();

  }
translate(-250, -50)
// building_layer(0, 0, 1)
// building_layer(500, 0, 1)

building_layer(300, 1, 0)

//color_gradient.R += 0.01;
	


}


function Building00(noise_index, darkness)
{
    this.x = noise(noise_index * .8) * width/3;
    this.y = noise(noise_index * .8 + 100) * height * 1.2;

    this.ratio = this.y / this.x;

    if (this.ratio  > 50 ) //if a building is too thin
    {
      this.x *= map(this.ratio, 0, 150, 0, 100);
    }

    this.offset = 0;

    this.offset += this.x ;

    this.show = function()
    {

    if(darkness == 0) //front layer	
    {
    	this.color = map(noise(noise_index*0.2), 1, 0, 0.2, 0)	//*.2 to reduce frequency, so that color doesn't change too much across the scene
      	fill(this.color)
    }
    else //background layer
    {
    	fill(0.2, 0.1, 0.5)
    	noStroke()
    }  



      rect(this.x, this.y, this.x, this.y + height)

      translate(this.offset, 0)
    }
}



function color_gradient(thickness) //thickness of a subdivision. The thinner, the smoother.
{                            
    for (i = 0; i < height; i+= thickness)
    {
      this.R = map(i, 0, height, 0.2, 0.5);
      this.G = map(i, 0, height, 0.1, 0.2);
      this.B = map(i, 0, height, 0.5, 0.6);


  	push();

        fill(this.R, this.G, B); //purple

        noStroke()  

        rect(0, i, width, thickness);

  	pop();

    }
}



function building_layer(iStart, windows, darkness)
{
	for (var i = 0+iStart; i < 10+iStart; i++)         //put BUILDINGS into its Array
	{
	buildingList[i] = new Building00(i, darkness); //(noise_index)
	}


	for (var i = 0+iStart; i < 10+iStart; i++)         //put WINDOWS into its Array
	{
	windowList[i] = new Windows00(buildingList[i].x, buildingList[i].y,
	                            buildingList[i].offset, buildingList[i].ratio, i);
	}

	for (var i = 0+iStart; i < 10+iStart; i++)         //put WINDOWS into its Array
	{
	storeyList[i] = new Storey00(buildingList[i].x, buildingList[i].y,
	                             buildingList[i].offset, i, darkness);
	}


	push()
	  for (var i = 0+iStart; i < num+iStart; i++)
	  {

	  		buildingList[i].show();

  		 	additional_translateX(i)

	  }
	pop()

	if(windows == 1)
	{	
		push()
		for (var i = 0+iStart; i < num+iStart; i++)
		{
			
			windowList[i].show()

	  		additional_translateX(i)

		}
		pop() 
	}


	push()
		
		for (var i = 0+iStart; i < num+iStart; i++)
		{
			storeyList[i].show();

			additional_translateX(i)
		}
	
	pop() 

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