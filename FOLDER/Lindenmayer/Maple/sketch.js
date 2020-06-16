//reference: https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_016_LSystem/P5/sketch.js

var red_slider, green_slider, blue_slider, alpha_slider, r, g, b, a; var gen = 0;

var my_color;

var current_index = 0, cur_color;

var lastSentence, nextSentence, sen_gen_diff = []


var lastF = 0, nextF = 0, currentF = 0;






var rad


var len = 175, wid = 25, angle = 10


var color1 = 1


var rules = [] 


var axiom = "F";

rules[0] = 
{
  a: 'F',
  b: 'F+[+++XF+F][-FFFFF]-[-----F-F]'
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

    //tree()

    var buttonGen = createButton("generate")

    buttonGen.mousePressed(generate)
}


function draw()
{
    r = red_slider.value()   

    g = green_slider.value()
    b = blue_slider.value()
    a = alpha_slider.value()

    my_color = (r, g, b, a)

    //print(a)


   // push()
      fill(r, g, b, a)

      rect(0, height-50, 50, 50)
   // pop()




    // if (current_index < sentence.length)
    // {
    //   current_index += 100;

    //   //push()

    //   fill(r, g, b, a)

    //   turtle(current_index)

    //   //pop()
    // }







}



function generate() 
{

  current_index = sentence.length
  
  gen += 1    

  lastSentence = sentence;


  nextSentence = '';

    //print(sentence)

  for (var i = 0; i < sentence.length; i++) 
  {
    var current = sentence.charAt(i);
    var found = false;

    if (current == "F") 
    {
      lastF += 1;
    }


    for (var j = 0; j < rules.length; j++) 
    {
      if (current == rules[j].a) {
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

  for (var i = 0; i < sentence.length; i++) 
  {
    var current = sentence.charAt(i);

    if (current == "F") 
    {
      nextF += 1;
    }
  }


  //print()
  //print(nextF)


  colors.push([r, g, b, a])


  //print("generation index: " + gen)

  //print(colors)

  //print(sentences)

  sen_gen_diff.push(nextF - lastF)

  //print("difference: " + sen_gen_diff)

  //print(sen_gen_diff[gen-1])


  createP(sentence);
  turtle();

}

function turtle()
{


  resetMatrix();

  translate(width/2, height)

  strokeWeight(1.5);


  for (var i = 0; i < sentence.length; i++)
  {

        var current = sentence.charAt(i)


        if (current == "F")
        {
            rect(0, 0, wid, -len)

            translate(wid/5, -len);

            scale(0.85, 0.9)
        }


      else if (current == '+')   rotate(rad);

      
      else if (current == '-')   rotate(-rad);


      else if (current == '[')
      {
          currentStatus = true;



          push();

          scale(0.7, 0.7)
          //scale(noise(0.1 * i), noise(0.1 * i))
          //scale(random(0.5, 1), random(0.5, 1))


          //fill(colors[gen-1])
      }
        
      else if (current == ']')
      {
        //scale(0.6, 0.6)

        //fill(colors[gen-1])

          currentStatus = false



          pop();

      }



      if (currentF > lastF)
      {
        fill(colors[gen -1])
      }  


  }
}


// var angle = 60

// var axiom = "F";

// rules[0] = 
// {
//   a: 'F',
//   b: 'F-FF—[F-FF]'
// }
