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
   colors.push([r, g, b, a])




  createP(sentence);
  turtle();

}