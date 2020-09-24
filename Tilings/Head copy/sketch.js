var size = 15

var tileLayer, fishLayer, head
var imgClone

function setup()
{
    createCanvas(600, 800)
    colorMode(RGB, 1)
    background(0.3, 0.5, 0.8)

    stroke(0)
    strokeWeight(10)

    push()
        translate(width/2, height/2 + 125);
        scale(0.7);



            point(0, 60);
            point(0, 60);
                  point(70, 30);
                          //point(77, 0);

                                  point(114, -90); //right, widest, belly
                             //point(110, 0);   //head
                                                      point(70, -400);

                                                              point(0, -620); //furthest, tail

                                                      point(-70, -400);
                             //point(-110, 0);
                                 point(-114, -90);  //left, widest, belly

                          //point(-77, 0);
                  point(-70, 30);

            point(0, 60);
            point(0, 60);
    pop()




    push();

        translate(width/2, height/2 + 125);
        scale(0.7);

        stroke(0)
        strokeWeight(5)



            point(0, 260);
            point(0, 260);
                  point(40, 230);

                    point(80, 135)


                          point(110, 40);

                              //point(90, 50);

                                    point(60, 55);

                                           point(0, 70);

                                    point(-60, 55);

                              //point(-90, 50);

                          point(-110, 40);

                      point(-80, 135)

                  point(-40, 230);

            point(0, 260);
            point(0, 260);



    pop();



push()
        translate(width/2, height/2 + 125);
        scale(0.7);

        stroke(1, 0, 0)
        strokeWeight(15)



            point(50, -730);
            point(50, -730);

            point(70, -650);





            point(0, -600);

            point(20, -700);


            point(50, -730);

    pop();

}










