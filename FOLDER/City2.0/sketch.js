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

  // for (var i = 0; i < 10; i++)         //put WINDOWS into its Array
  // {
  //   windowList[i] = new Windows00(buildingList[i].x, buildingList[i].y,
  //                                buildingList[i].offset);
  // }





// #############################################################################################

}

function draw()
{
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