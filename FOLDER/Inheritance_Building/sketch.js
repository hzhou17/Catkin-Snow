var building = []
var storey = []
var window_ = []

var num

// function color_gradient(thickness) // height and width of the canvas.
// {                            //thickness of a subdivision. The thinner, the smoother.
//     //let range = height //life up the canvas by 200
//
//     for (i = 0; i < height; i+= thickness)
//     {
//       var new_color = map(i, 0, height, 0.5, 0);
//
//       push();
//                                                          //Finer sky color adjustment
//         fill(new_color - num, new_color - num, new_color + num); //for the blue background
//         noStroke()
//         rect(0, i, width, thickness);
//
//       pop();
//     }
// }
// #################################################################
// #################################################################
// #################################################################
function setup()
{
  colorMode(RGB, 1);
  createCanvas(1280, 720);
  background(0.5)

  for (var i = 0; i < 10; i++)
  {
    building[i] = new Building(i) //(noise_index)
    storey[i] = new Storey(i)
    window_[i] = new Window_(i)

  }

  for (var i = 0; i < building.length; i++)
  {
    building[i].show()
    storey[i].show()
    window_[i].show()


    if (i < building.length -1)
    {
      if ((building[i+1].x) < (building[i].x))
        {
          translate((building[i].x) - (building[i+1].x), 0);
        }
    }
  }







}

// function draw()
// {
//     for (var i = 0; i < building00.length; i++)
//     {
//       building00[i].show();
//     }
// }







