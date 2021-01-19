
let body = []
let xdir = 1
let ydir = 0

let step = 0

function setup()
{
    createCanvas(400, 400);

    frameRate(5)

    for(let i = 0; i < 14; i++)
    {
        body[i] = createVector(100 + 10 * i, 100)
    }




}


function draw()
{
    background(0)

    noStroke()
 
    
    let head = body[body.length-1].copy();

    //print(head)
    body.shift();
    head.x += xdir * 10;
    head.y += ydir * 10;
    body.push(head);
    step += 1


    if (step <= 4)
    {
        xdir = 1
        ydir = 0
    }

    if (step <= 8 && step > 4)
    {
        xdir = 0
        ydir = 1
    }

    if (step <= 12 && step > 8)
    {
        xdir = -1
        ydir = 0
    }

    if (step <= 16 && step > 12)
    {
        xdir = 0
        ydir = -1
    }

    if (step == 16) step = 0


    print(body.length)

    for(let i = 0; i < body.length; i++)
    {
        rect(body[i].x, body[i].y, 4, 4)
    }

    



    

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xdir = -1
  } else if (keyCode === RIGHT_ARROW) {
    xdir = 1
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}