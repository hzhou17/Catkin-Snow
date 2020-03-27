function Flake00()	//different layers of snow. the smaller the name index (00, 01, ...) , the further away from the camera.					
{
    this.x = random(0, width+350);        		//set the initial x and y position of a flake
    this.y = random(-height, -100);
    this.yspeed  = random(0, 0.75);				//use random for variation in speeds
    this.xspeed  = random(-0.5, 0.);

    this.scale = map(this.yspeed, 0.5, 3, 1, 2)  //map the speed to a scaler with which I can use to scale the size. The faster, the larger.
    this.length = random(2, 5);					//use random for variation in sizes
    this.width = random(1, 4);

    this.colorAlpha = random(0.2, 1);  			//Fluffy alphaAdjust


    this.fall = function()
    {
        this.y += this.yspeed;					//continuously update the xy position to simulate snow falling
        this.x += this.xspeed;


        if((this.y > height))					//once outside canvas, put they back to the original positions
        {
            this.y = random(-height, -100)
        }

        if(this.x < 0)
        {
            this.x = random(width + 350);
        }


    }

    this.display = function()
    {
        fill(1., 1., 1., this.colorAlpha * this.alphaAdjust);

		let distance = dist(this.x, this.y, mouseX, mouseY)			//calculate distance to mouse cursor.

		if (distance > 100) this.alphaAdjust = 0;					// if too far, set alpha to 0. make it disappear
		else 
		{
			this.alphaAdjust = map(distance, 0, 100, 1, 0.9)		// if close enough, then show. slight adjust alpha value based 
		}															// the distance, so that the edge ones are less bright.

        ellipse(this.x, this.y, this.length, this.width);
    }
}





function Flake01()
{
    this.x = random(0, width + 500);
    this.y = random(-height, -50);
    this.yspeed  = random(1, 2);
    this.xspeed  = random(-0.75, -0.25);

    this.size = random(3,6);

    this.colorAlpha = random(0.3, 1);

    this.fall = function()
    {
        this.y += this.yspeed;
        this.x += this.xspeed;

        if((this.y > height))
        {
            this.y = random(-height, -50)
        }

        if(this.x < 0)
        {
            this.x = random(width + 500);
        }
    }

    this.display  = function()
    {
        fill(1., 1., 1., this.colorAlpha * this.alphaAdjust);

		let distance = dist(this.x, this.y, mouseX, mouseY)

		if (distance > 100) this.alphaAdjust = 0;
		else 
		{
			this.alphaAdjust = map(distance, 0, 100, 1, 0.9)
		}

        circle(this.x, this.y, this.size);
    }
}


function Flake02()
{
    this.x = random(width + 500)
    this.y = random(-height, 0);





	//this.alphaAdjust = map(distance, 0, )


    this.yspeed  = random(1.5, 3);
    this.xspeed  = random(-1.5, -0.75);

    this.length = random(4.5, 8.5);
    this.width = random(3.5, 6.5);

    this.colorAlpha = random(0.4, 1);  //Fluffy alphaAdjust

    this.gravity = 0.003;



    this.fall = function()
    {
        this.y += this.yspeed;
        this.x += this.xspeed;

        this.yspeed += this.gravity;

        if(this.x < 0)
        {
            this.x = random(100, width + 500);
        }

        if(this.y > height)
        {
            this.y = random(-height, 0);
            this.yspeed = random(1.5, 3);
            //this.yspeed = 0; fluffy flow feel. very fall straight down
        }

    }

    this.display  = function()
    {

        	fill(1., 1., 1., this.colorAlpha * this.alphaAdjust);



			let distance = dist(this.x, this.y, mouseX, mouseY)

				if (distance > 100) this.alphaAdjust = 0;
				else 
				{
					this.alphaAdjust = map(distance, 0, 100, 1, 0.9)
				}


        	ellipse(this.x, this.y, this.length, this.width);

    }
}



function Flake03()
{
    this.x = random(width + 300)
    this.y = random(-height, 0);
    this.yspeed  = random(1.25, 2.25);
    this.xspeed  = random(-0.75, -1.25);

    this.length = random(3.5, 6.5);
    this.width = random(2.5, 4.5);

    this.colorAlpha = random(0.3, 0.85);  //Fluffy alphaAdjust

    this.gravity = 0.003;

    this.ranSpeed = random(1, 1.5);

    this.fall = function()
    {
        this.y += this.yspeed;
        this.x += this.xspeed;

        this.yspeed += this.gravity;

        if(this.x < 0)
        {
            this.x = random(width + 300);
        }

        if((this.y > height) )
        {
            this.y = random(-height, 0);
            this.yspeed = this.ranSpeed;
        }
    }

    this.display = function()
    {
        fill(1., 1., 1., this.colorAlpha * this.alphaAdjust);

		let distance = dist(this.x, this.y, mouseX, mouseY)


		if (distance > 100) this.alphaAdjust = 0;
		else 
		{
			this.alphaAdjust = map(distance, 0, 100, 1, 0.9)
		}


        ellipse(this.x, this.y, this.length, this.width);
    }
}



function Flake04() //this layers is not affected by the mouse. 
{
    this.x = random(width + 300)
    this.y = random(-height, 0);
    this.yspeed  = random(0.5, 3);
    this.xspeed  = random(-0.75, -1.25);

    this.scale = map(this.yspeed, 0.5, 3, 1, 2)

    this.length = random(2.5, 5.5)*this.scale;
    this.width = random(1.5, 3.5)*this.scale;

    this.colorAlpha = random(0, 0.2);  //Fluffy alphaAdjust

    this.gravity = 0.003;



    this.fall = function()
    {
        this.y += this.yspeed;
        this.x += this.xspeed;

        this.yspeed += this.gravity;


        if((this.y > height) ||this.x < 0)
        {
            this.y = random(-height, 0);

            this.x = random(width + 300);

    		this.yspeed  = random(1.25, 3);
        }
    }

    this.display = function()
    {
        fill(1., 1., 1., this.colorAlpha);


        ellipse(this.x, this.y, this.length, this.width);
    }
}