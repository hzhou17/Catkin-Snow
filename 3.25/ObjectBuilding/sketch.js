var buildingList = []

var windowList = []

var storeyList = []

var num



function setup()
{
  colorMode(RGB, 1);
  createCanvas(1280, 720);
  background(0.5)

  color_gradient(40)
// #############################################################################################

  for (var i = 0; i < 10; i++)         //put BUILDINGS into its Array
  {
    buildingList[i] = new Building00(i); //(noise_index)
  }


  for (var i = 0; i < 10; i++)         //put WINDOWS into its Array
  {
    windowList[i] = new Windows(buildingList[i].x, buildingList[i].y,
                                buildingList[i].offset);
  }

  for (var i = 0; i < 10; i++)         //put WINDOWS into its Array
  {
    storeyList[i] = new Storey00(buildingList[i].x, buildingList[i].y,
                                 buildingList[i].offset);
  }





// #############################################################################################

  for (var i = 0; i < buildingList.length; i++)
  {
    buildingList[i].show();


    if (i < buildingList.length -1)
    {
      if ((buildingList[i+1].x) < (buildingList[i].x))
        {
          translate((buildingList[i].x) - (buildingList[i+1].x), 0)
        }
    }
  }

}

function draw()
{
  windowList[0].show();
  storeyList[0].show();
}


function Building00(noise_index)
{
    this.x = noise(noise_index * .8) * width/5;
    this.y = noise(noise_index * .8 + 100) * height;

    this.ratio = this.y / this.x;

    if (this.ratio  > 65 )
    {
      this.x *= map(this.ratio, 0, 500, 0, 200);
    }

    this.offset = 0;

    this.offset += this.x ;

    this.show = function()
    {
      fill(0)

      rect(this.x, this.y, this.x, height)

      translate(this.offset, 0)
    }
}







function color_gradient(thickness) // height and width of the canvas.
{                            //thickness of a subdivision. The thinner, the smoother.
    for (i = 0; i < height; i+= thickness)
    {
      var R = map(i, 0, height, 0.4, 0.3);
      var G = map(i, 0, height, 0.2, 0.1);
      var B = map(i, 0, height, 0.6, 0.5);


      push();

        fill(R, 0.1, B); //purple

        noStroke()  

        rect(0, i, width, thickness);

      pop();
    }
}