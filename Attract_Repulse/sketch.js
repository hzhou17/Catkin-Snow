let attractor
let particles = []


// #################################################################
// #################################################################
// #################################################################
function setup()
{
	createCanvas(window.innerWidth, window.innerHeight)
	colorMode(RGB, 1)
	background(0)


	for (let i=0; i < 10; i++)
	{
		particles.push(new Particle(200, 100))
	}



	attractor = createVector(width/2, height/2)


}


function draw()
{
	//background(0)
	stroke(1)
	strokeWeight(4)

	point(attractor.x, attractor.y)


	for (let i=0; i < particles.length; i++)
	{
		let particle = particles[i]

		particle.attracted(attractor)
		particle.update()
		particle.show()
	}












}


// ################################################################
// ################################################################
// ################################################################
