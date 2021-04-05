
let a, b 

let mouse

let scalar_project

function setup()
{

    createCanvas(500, 500)

    colorMode(RGB, 1)

    background(0.5)

    strokeWeight(5)



    //b = 

}



function draw()
{
    background(0.5)


    a = createVector(100, 300)
    b = createVector(300, 400)


    line(a.x, a.y, b.x, b.y)

    mouse = createVector(mouseX, mouseY)


    line(mouseX, mouseY, 100, 300)


    let A = mouse.sub(a)
    let B = b.sub(a)





    //scalar_project = createVector()


    //scalar_project = (A.mult(A.dot(B))).div(A.magSq())
    B.normalize()

    B.mult(A.dot(B))

    //scalar_project = (A.dot(B)/B.mag())

    //print(B)

    push()
        fill(1)
        circle(B.x + 100, B.y + 300, 5)
    pop()


}
