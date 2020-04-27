// variables: A b
// axiom: A
// rules: (A - AB), (B - A)
var canvas

var axiom = "F+XF+F+XF";

var sentence = axiom;

var len = 5

var rules = [] 

var angle = 60

var rad;

rules[0] = 
{
  a: 'F',
  b: 'F-F+F'
}


// rules[1] =
// {
//   a: "Y",
//   b: "YFXFY-F-XFYFX+F+YFXFY"
// }


function generate() {
  //len *= 0.5;
  var nextSentence = '';

  for (var i = 0; i < sentence.length; i++) 
  {
    var current = sentence.charAt(i);
    var found = false;

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
  createP(sentence);
  turtle();
}

function turtle()
{
  background(0.5)

  resetMatrix();

  translate(width/2, height/2)

  stroke(1)

  for (var i = 0; i < sentence.length; i++)
  {
      var current = sentence.charAt(i)

      if (current == "F")
      {
          line(0, 0, 0, -len)

          translate(0, -len);
      }

     else if (current == '+')   rotate(rad);
    
     else if (current == '-')   rotate(-rad);

     else if (current == '[')   push();
      
     else if (current == ']')   pop();

    
  }
}




function setup() 
{  
    rad = angle * PI/180;

    canvas = createCanvas(1200, 800);

    colorMode(RGB, 1)

    background(0.5)

    createP(axiom)

    turtle()

    var buttonGen = createButton("generate")

    buttonGen.mousePressed(generate)

    var buttonZoom = createButton("zoom")

    buttonZoom.mousePressed(zoom)

}

function zoom()
{
  scale(0.5, 0.5)
}
