let qTree


function setup()
{
  createCanvas(400, 400)

  let boundary = new Rectangle(200, 200, 200, 200)
  qTree = new QuadTree(boundary, 4) 



  // for (let i=0; i<200; i++)
  // {
  //   let p = new Point(random(width), random(height))
  //   qTree.insert(p)
  // }


  print(qTree)




}


function draw()
{
  background(0)
  qTree.show()



  if (mouseIsPressed)
  {
    for (i=0; i<5; i++)
    {
      let m = new Point(mouseX+random(-5,5), mouseY+random(-5,5))
      qTree.insert(m)
    }


  }



}