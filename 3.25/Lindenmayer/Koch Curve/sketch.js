//References: 

//https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_016_LSystem/P5/sketch.js. (L-System Set up)

//https://en.wikipedia.org/wiki/L-system (Rule for Koch curve)

//How to run: press the Generate button for a few times.

var current_index = 0;

var axiom = "F";

var sentence = axiom;

var len = 10

var rules = [] 

rules[0] = 
{
  a: 'F',
  b: 'F+F−F−F+F'
}

function generate() 
{
  current_index = 0


  var nextSentence = '';

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
    if (!found) 
    {
      nextSentence += current;
    }
  }

  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function turtle(index)
{
  background(0.5)

  resetMatrix();

  translate(0, height - 10)

  stroke(1)

  for (var i = 0; i < index; i++)
  {
    var current = sentence.charAt(i)

    if (current == "F")
    {
        line(0, 0, len, 0)

        translate(len, 0);
    }

    else if (current == '+')
    {
      rotate(-PI/2) 
    }

    else if (current == '−')
    {
      rotate(PI/2) 
    }
  }
}


function setup() 
{  
    createCanvas(800, 800);

    colorMode(RGB, 1)

    background(0.5)

    createP(axiom)

    turtle()

    var button = createButton("generate")

    button.mousePressed(generate)

}

function draw()
{
      if (current_index < sentence.length)
      {
        current_index += 1;

        turtle(current_index)
      }


}