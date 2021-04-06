class Path {

  constructor() {
    this.radius = 20;
    this.points = [];
  }

  /////////////////////////////
  addPoint(x, y) {
    let point = createVector(x, y);
    this.points.push(point);
  }

  /////////////////////////////
  display() {
    stroke(0);
    
    // stroke (0, 100); strokeWeight(20); 
    noFill();
    beginShape();
    for (let i = 0; i < this.points.length; i++) {
      vertex(this.points[i].x, this.points[i].y);
    }
    endShape();
    // stroke(0); strokeWeight(1);

    text("Press space for a new path. Left click for a new start.", 20, 180);
  }
}