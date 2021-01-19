//reference: https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_016_LSystem/P5/sketch.js
var current_index = 0;


var rad


var len = 200
var angle = 15


var rules = [] 


var axiom = "F";

rules[0] = 
{
  a: 'F',
  b: 'F[+F+F][-F-F]'
}


var sentence = axiom;


function generate() 
{

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

  translate(width/2, height)

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

    else if (current == '[')
    {
        push();
        scale(0.6, 0.6)
    }
      
    else if (current == ']')
    {
      scale(0.6, 0.6)
        pop();

    }  


  }
}



function setup() 
{  

    createCanvas(1000, 1000);

    rad = angle * PI/180;

    colorMode(RGB, 1)

    background(0.5)

    createP(axiom)

    turtle()

    var buttonGen = createButton("generate")

    buttonGen.mousePressed(generate)
}



function tree()
{
  translate(width/2, height)

  line(0, 0, 0, -100)


  push()

    translate(0, -100)
    rotate(PI/4)

    line(0, 0, 0, -50)

    push()
        translate(0, -50)
        rotate(PI/8)

        line(0, 0, 0, -25)
    pop()



    push()
        translate(0, -50)
        rotate(-PI/8)

        line(0, 0, 0, -25)
    pop()


  pop()





  push()


    translate(0, -100)
    rotate(-PI/4)

    line(0, 0, 0, -50)

    push()
        translate(0, -50)
        rotate(PI/8)

        line(0, 0, 0, -25)
    pop()      

    push()
        translate(0, -50)
        rotate(-PI/8)

        line(0, 0, 0, -25)
    pop()   


  pop()
}