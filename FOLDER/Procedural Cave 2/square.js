// class Square
// {
//     constructor(x_pos, y_pos)
//     {
//         this.x = x_pos
//         this.y = y_pos



//     }

//     Decide_Wall()
//     {
//         if (Math.random() > 0.5)
//         {
//             coord[this.x, this.y] = 1

//           //this.is_wall = true
//         }
//         else
//         {
//             coord[this.x, this.y] = 0 // 0 is black, wall.
//            //this.is_wall = false

//            wall_num ++
//         }

//         if(this.x == 0 || this.x == width - size ||
//             this.y == 0 || this.y == height - size)
//         {
//             coord[this.x, this.y] = 0
//         }
//     }



//     GetSurrondingWallCount()
//     {
//         this.wallCount = 0;

//         for (var neighborX = this.x - size; neighborX <= this.x + size; neighborX += size)
//         {
//             for (var neighborY = this.y - size; neighborY <= this.y + size; neighborY += size)
//             {
//                 if (neighborX >= 0 && neighborX < width && neighborY >= 0 && neighborY < height)
//                 {
//                     if (neighborX != this.x || neighborY != this.y)
//                     {
//                         this.wallCount += coord[neighborX, neighborY]
//                     }
//                 }

//                 else
//                 {
//                     //if this is around the edge, encourage the growth of walls
//                     this.wallCount++;
//                 }
//             }
//         }



//             return(this.wallCount)
//         }




//       SmoothMap()
//       {



//         // if (this.GetSurrondingWallCount() > 5)
//         // {
//         //     coord[this.x, this.y] = 0
//         // }

//         // else
//         // {
//         //     coord[this.x, this.y] = 1
//         // }




//      //    // for (var x = 0; x < width; x += size)
//      //    // {
//      //    //     for (var y = 0; y < height; y += size)
//      //    //     {
//      //    //         print(x)
//      //    //         print(y)
//      //    //         //if (this.wallCount > 3) coord[x, y] = 0
//      //    //         //else if (this.wallCount < 3) coord[x, y] = 1
//      //    //     }

//      //    // }
//          }



//     show()
//     {
//             if (coord[this.x, this.y] == 0)
//             {
//                 fill(0) //0 is black, wall.

//             }
//             else
//             {
//                 fill(1)

//             }
//             // for (var x = 0; x < width; x += size)
//             // {
//             //     for (var y = 0; y < height; y += size)
//             //     {
//             //         print(this.wallCount)
//             //         if (this.wallCount > 3) coord[x, y] = 0
//             //         else if (this.wallCount < 3) coord[x, y] = 1
//             //     }

//             // }


//             rect(this.x, this.y, 20, 20)

//             //tile_num ++
//     }

// }



