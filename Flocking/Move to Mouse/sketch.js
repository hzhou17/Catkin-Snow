// const flock = []

// let alignSlider, cohesionSlider, separationSlider, followSlider

// let leader, obstacle

// function setup()
// {
//     createCanvas(600, 600)

//     colorMode(RGB, 1)


//     // alignSlider = createSlider(0, 5, 1, 0.1)
//     // cohesionSlider = createSlider(0, 5, 1, 0.1)
//     // separationSlider = createSlider(0, 5, 1, 0.1)
//     // followSlider = createSlider(0, 10, 5, 1)

//     for(let i=0; i<100; i++)    
//     {
//         flock.push(new Boid())
//     }

//     leader = new Leader()
//     flock.push(leader)

//     //obstacle = new Obstacle()





//     //flock.push(obstacle)
// }



// function draw()
// {
//     background(0.5)

//     for (let boid of flock)
//     {
//         if (boid != leader)
//         {
//             boid.edges()
//             //boid.flock(flock)
//             boid.move()

//         }
//             boid.show()

//     }


// }




// function setup() {
//   frameRate(1);
// }

// function draw() {
//   background(240);

//   let v0 = createVector(50, 50);
//   //let v1 = createVector(random(40), random(40))
//   let v1 = p5.Vector.random2D();
//   drawArrow(v0, v1, 'black');
// }

// // draw an arrow for a vector at a given base position
// function drawArrow(base, vec, myColor) {
//   push();
//   stroke(myColor);
//   strokeWeight(3);
//   fill(myColor);
//   translate(base.x, base.y);
//   line(0, 0, vec.x, vec.y);
//   rotate(vec.heading());
//   let arrowSize = 7;
//   translate(vec.mag() - arrowSize, 0);
//   triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
//   pop();
// }

//----------------------Linear Lerp

let beginX = 20.0; // Initial x-coordinate
let beginY = 10.0; // Initial y-coordinate
let endX = 570.0; // Final x-coordinate
let endY = 320.0; // Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponent = 4; // Determines the curve
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.01; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)

let begin, end, dist, position

function setup() {
  createCanvas(720, 400);
  noStroke();

  begin = createVector(beginX, beginY)
  end = createVector(endX, endY)



  dist = end.sub(begin)

  print(dist.mult(0.1))
}

function draw() {
  fill(0, 2);
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) 
  {
    position = (begin.add(dist.mult(pct))).x

    //print(dist)
  }
  fill(255);
  ellipse((begin.add(dist.mult(pct))).x, 
    (begin.add(dist.mult(pct))).y, 20, 20);


  if (frameCount%60==0) print(position)
}

function mousePressed() {
  pct = 0.0;


  begin = position


  end = createVector(mouseX, mouseY)


  dist = end.sub(begin)
}






//-----------location, velocity, acceleration



let mover


function setup()
{
    createCanvas(600, 600)


    mover = new Mover()



}


function draw()
{
    mover.move()
}

class Mover
{
    constructor()
    {
        this.location = createVector(300, 300)
        this.velocity = createVector()
        this.acceleration = createVector()
    }


    move()
    {
        let mouse = createVector(mouseX, mouseY)
        mouse.sub(this.location)
        mouse.setMag(0.5)


        this.acceleration = mouse 







        this.velocity = this.velocity.add(this.acceleration)
        this.location = this.location.add(this.velocity)

        this.velocity.limit(5)


        ellipse(this.location.x, this.location.y, 10, 10)
    }
}



