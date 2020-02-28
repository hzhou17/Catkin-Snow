


function pole_faceRight(tx, ty, sx, sy) 
{
    push()

        translate(width/2 - 7.5, height) //middle, bottom of the canvas
        translate(tx, ty)
        scale(sx, sy)

        strokeWeight(2)

            rect(0, 0, 15, -450) //pole body

        translate(0, -450); //always translate by previous height to connect the part together.

        rotate(PI/3)

            rect(0, 0, 20, -75) //light arm

        translate(0, -75)    
        rotate(PI/6)


        rect(0, 0, 20, -100) //light arm


        translate(0, -100)  
        circle(40, 0, 50) // light

    pop()
}

