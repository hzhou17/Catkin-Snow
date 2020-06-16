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
          push();

          scale(0.7, 0.7)


          //fill(colors[gen-1])

      }
        
      else if (current == ']')
      {
          pop();
      }

  }
}