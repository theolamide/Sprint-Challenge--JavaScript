// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMakers{
    constructor (dimensionss){
    this.lengths = dimensionss.lengths,
    this.widths = dimensionss.widths,
    this.heights = dimensionss.heights
    
  }
  volumes(){
    return this.lengths*this.widths*this.heights
  }

  surfaceAreas(){
    return (this.lengths*this.widths) + (this.lengths*this.heights) + (this.widths*this.heights) 
  }
}


class CubeMakers extends CuboidMakers{
    constructor (cubeDimensions){
        super(cubeDimensions);
        this.cubeLength = cubeDimensions.cubeLength
      }
      cubeVolume(){
        return this.cubeLength*this.widths*this.heights
      }

      cubeSurfaceArea(){
        return (this.cubeLength*this.widths) + (this.cubeLength*this.heights) + (this.widths*this.heights)  
      }
}


    const cuboids = new CuboidMakers({
      lengths: 4,
      widths: 5,
      heights: 5,      
    })


    const cube = new CubeMakers({
      lengths: 4,
      widths: 5,
      heights: 5,
      cubeLength:5,
    })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboids.volumes()); // 100
console.log(cuboids.surfaceAreas()); // 130
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.