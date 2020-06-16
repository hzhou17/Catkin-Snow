//code mostly from https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_016_LSystem/P5/sketch.js
//I will comment on the places that I did myself.


var red_slider, green_slider, blue_slider, alpha_slider, r, g, b, a; 

//var gen = 0;

// var branchArray = [];

// var current_index = 0, cur_color;

// var lastSentence, nextSentence, sen_gen_diff = [] 

// var lastF = 0, nextF = 0, currentF = 0;

//I tried quite a few methods to store the generational information
// in order to apply different color to each generation, but I did not succeed this time.




var rad


var len = 20, wid = 25, angle = 60


var rules = [] 


var axiom = "F";

rules[0] = 
{
  a: 'F',
  b: 'F-FF+F-FF' //I wrote the rule myself. 
  //b: 'FF'
}


// rules[1] =
// {
//   a: "X",
//   //b: "F[+XXF][-X-FF]-FX'"
//   b: "-F+X"
// }

var sentence = axiom;

var sentences = [] 

var colors = []

function setup() 
{  
  //-----------------------------------------------------------------------------
    //I did some sliders to set a color and draw tree with.

    red_slider   = createSlider(0, 1, 0, 0.01) //createSlider(min, max, [default value], [step]) reference: p5js.org/reference/#/p5/createSlider
    red_slider.position(10,10)

    green_slider = createSlider(0, 1, 0.7, 0.01)
    green_slider.position(10,30)

    blue_slider  = createSlider(0, 1, 0.5, 0.01)
    blue_slider.position(10,50)


    alpha_slider = createSlider(0, 1, 0.7, 0.01)
    alpha_slider.position(10,70)
//-----------------------------------------------------------------------------

    createCanvas(800, 800);

    rad = angle * PI/180;

    colorMode(RGB, 1)

    background(0.5)

    createP(axiom)

    //turtle()
}




function generate() 
{
  //current_index = sentence.length //Again things I tried to record generations. But it didn't work.
  
  // gen += 1    

  // lastSentence = sentence;

  nextSentence = '';

    //print(sentence)

  for (var i = 0; i < sentence.length; i++) 
  {
    var current = sentence.charAt(i);
    var found = false;

    for (var j = 0; j < rules.length; j++) 
    {
      if (current == rules[j].a) 
      {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }

    if (!found) {
      nextSentence += current;
    }
  }

  sentence = nextSentence;


  //colors.push([r, g, b, a])

  createP(sentence);
  turtle();

}



function turtle()
{

  resetMatrix();

  translate(width/2, height/2)

  strokeWeight(1.5);


  for (var i = 0; i < sentence.length; i++)
  {

        var current = sentence.charAt(i)


        if (current == "F")
        {
            line(0, 0, 0, -len)

            translate(0, -len);

            //scale(0.85, 0.9)
        }


      else if (current == '+')   rotate(rad);
      
      else if (current == '-')   rotate(-rad);

      else if (current == '[')
      {
          push();

          //scale(0.7, 0.7) //this is what I scale things down

          //fill(colors[gen-1])

      }
        
      else if (current == ']')
      {
          pop();
      }

  }
}


function mousePressed()
{
  generate()
}



function draw()
{
    r = red_slider.value()   

    g = green_slider.value()
    b = blue_slider.value()
    a = alpha_slider.value()


    push()

      fill(r, g, b, a)
      rect(0, height-50, 50, 50) // I put an on-screenbox to show the picked color

    pop()


    // if (current_index < sentence.length) //what I used to animate the drawing process.
    // {
    //   current_index += 100;

    //   //push()

    //   fill(r, g, b, a)

    //   turtle(current_index)

    //   //pop()
    // }
}