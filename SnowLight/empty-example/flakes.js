function Flake01()
{
    this.x = random(0, width + 300);
    this.y = random(-height, -50);
    this.yspeed  = random(1, 2);
    this.xspeed  = random(-0.75, -0.25);

    this.size = random(2,5);

    this.colorAlpha = random(0, 0.8);

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
            this.x = random(width + 300);
        }
    }

    this.show = function()
    {
        fill(1., 1., 1., this.colorAlpha + alphaAdjust);
        circle(this.x, this.y, this.size);
    }
}


function Flake02()
{
    this.x = random(width + 300)
    this.y = random(-height, 0);
    this.yspeed  = random(1.5, 3);
    this.xspeed  = random(-1, -1.5);

    this.length = random(3.5, 7.5);
    this.width = random(2.5, 5.5);

    this.colorAlpha = random(0.2, 1);  //Fluffy alphaAdjust

    this.gravity = 0.003;



    this.fall = function()
    {
        this.y += this.yspeed;
        this.x += this.xspeed;

        this.yspeed += this.gravity;

        if(this.x < 0)
        {
            this.x = random(width + 300);
        }

        if(this.y > height)
        {
            this.y = random(-height, 0);
            this.yspeed = random(1.5, 3);
            //this.yspeed = 0; fluffy flow feel. very fall straight down
        }

    }

    this.show = function()
    {
        fill(1., 1., 1., this.colorAlpha + alphaAdjust);
        ellipse(this.x, this.y, this.length, this.width);
    }
}

function Flake03()
{
    this.x = random(width/2-50, width/2+300);
    this.y = random(height/2-100, height/2 +50);
    this.yspeed  = 2.75;
    this.xspeed  = -1.25;

    this.length = random(4, 10);
    this.width = random(3, 8);

    this.colorAlpha = random(1);  //Fluffy alphaAdjust

    this.gravity = 0.003;

    this.rotation = PI/6 + random(-10, 10)

    this.angle = random(PI, 2 * PI);

    this.fall = function()
    {
        this.y -= (1.5 * cos(this.angle - 1));
        this.x += (2.5 * sin(this.angle));

        this.yspeed += this.gravity;

        if((this.x < -50) || (this.y > height + 50) ||(this.y < 0) )
        {
            this.x = random(width/2-25, width);
            this.y = random(height/2-200, height/2 +50);

            this.yspeed = 1.5;
        }

    }

    this.show = function()
    {
        fill(1., 1., 1., this.colorAlpha + alphaAdjust);
        // rotate(this.rotation)
        ellipse(this.x, this.y, this.length, this.width);
    }
}

function Flake04()
{
    this.x = random(width + 300)
    this.y = random(-height, 0);
    this.yspeed  = random(1.25, 2.25);
    this.xspeed  = random(-0.75, -1.25);

    this.length = random(2.5, 5.5);
    this.width = random(1.5, 3.5);

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

    this.show = function()
    {
        fill(1., 1., 1., this.colorAlpha + alphaAdjust);
        ellipse(this.x, this.y, this.length, this.width);
    }
}