function Cell(i, j)
{

    this.i = i
    this.j = j
    this.walls = [true, true, true, true]
    this.visited = false;


    this.checkNeighbors() = function()
    {
        var neighbors = [] //will contain all unvisited neighbors

        var top    =   grid[index(this.i      , this.j -1)]//gird is the array of cells
        var right  =   grid[index(this.i + 1  , this.j)]
        var bottom =   grid[index(this.i      , this.j + 1)]
        var left   =   grid[index(this.i - 1  , this.j )]

        if (top    && !top.visited) neighbors.push(top) //if not undefined
        if (right  && !right.visited) neighbors.push(right)
        if (bottom && !bottom.visited) neighbors.push(bottom)
        if (left   && !left.visited) neighbors.push(left)

        if (neighbors.length > 0)// While the current cell has any unvisited neighbour cells
        {                       // Choose one of the unvisited neighbours
            var r = floor(random(0, neighbors.length))

            return neighbors[r]//random one of the unvisited
        }
        else
        {
            return undefined
        }

    }

    this.show() = function()
    {
        var x = this.i * w
        var y = this.j * w

        stroke(1)
        noFill()

        if (this.walls[0])    line(x    ,  y,      x + w,  y)
        if (this.walls[1])    line(x + w,  y,      x + w,  y + w)
        if (this.walls[2])    line(x + w,  y + w,  x    ,  y + w)
        if (this.walls[3])    line(x    ,  y + w,  x    ,  y)

        if (this.visited)
        {
            noStroke()
            fill(1, 0, 1, 0.4)
            rect(x, y, w, w)
        }
    }
}
