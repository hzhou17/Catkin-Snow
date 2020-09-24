class Cell
{
    constructor(i, j)
    {
        this.i = i
        this.j = j

        this.visited = false;

        //this.coord = this.GetCoord()
    }

    CheckNeighbors()
    {
        let neighbors = [];

        let top = grid[this.i, this.j - size];
        let right = grid[this.i + size, this.j];
        let bottom = grid[this.i, this.j + size];
        let left = grid[this.i - size, this.j];

        print(coord[this.i][this.j-size])
        print(coord[this.i+size][this.j])
        print(coord[this.i][this.j+size])
        print(coord[this.i-size][this.j])

        if (top && !top.visited && coord[this.i][this.j-size] == 1) {
          neighbors.push(top);
        }
        if (right && !right.visited && coord[this.i+size][this.j] == 1) {
          neighbors.push(right);
        }
        if (bottom && !bottom.visited && coord[this.i][this.j+size] == 1) {
          neighbors.push(bottom);
        }
        if (left && !left.visited && coord[this.i-size][this.j] == 1) {
          neighbors.push(left);
        }

        if (neighbors.length > 0) {
          let r = floor(random(0, neighbors.length));
          return neighbors[r];
        }
        else
        {
          return undefined;
        }
    }


    show()
    {
        fill(0.5)
        fill(coord[this.i][this.j])
        rect(this.i, this.j, size, size)


        if (this.visited)
        {
            fill(1, 0, 0)
            rect(this.i, this.j, size, size)
        }



    }

}
