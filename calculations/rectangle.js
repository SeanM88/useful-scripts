class Rectangle {
  
  constructor(rectangle = {}, width=null, height=null) {
    this.width = rectangle.width ? rectangle.width : width;
    this.height = rectangle.height ? rectangle.height : height;
  }
  
  get dimensions() {
    return [this.width, this.height];
  }
  
  set dimensions(sizes) {
    [this.width, this.height] = sizes;
  }
  
  get area() {
    return Rectangle.calcArea(this.dimensions);
  }
  
  get diagonal() {
    return Rectangle.calcDiagonalLength(this.dimensions);
  }

  static calcArea(dimensions) {
    if (!Array.isArray(dimensions) || dimensions.length !== 2) {
      return undefined;
    }
    return parseFloat(dimensions[0]) * parseFloat(dimensions[1]);
  }

  static calcDiagonalLength(dimensions) {
    if (!Array.isArray(dimensions) || dimensions.length !== 2) {
      return undefined;
    }
    // Pythagorean theorem: c = sqrt(a^2 + b^2) on array containing sides a & b
    return Math.sqrt( dimensions.reduce((acc, item) =>  acc + Math.pow(parseFloat(item), 2), 0) );
  }

  static calcAspectRatioFloat(dimensions) {
    if (!Array.isArray(dimensions) || dimensions.length !== 2) {
      return undefined;
    }
    return parseFloat(dimensions[0]) / parseFloat(dimensions[1]);
  }

}

const box = new Rectangle(16,9);
console.log(box.width); // Expect 16
console.log(box.height); // Expect 9
console.log(box.area); // Expect 144
console.log(box.area); // Expect 144
console.log(box.area); // Expect 144
box.dimensions = [11.278,7.049];
console.log(box.width); // Expect 11.278
console.log(box.height); // Expect 7.049
console.log(box.area); // Expect 79.498622

function findRectangleDimensions(diag_len, aspect_ratio) {
  let width = diag_len / Math.sqrt((1 / Math.pow(aspect_ratio, 2)) + 1);
  let height = diag_len / Math.sqrt(Math.pow(aspect_ratio, 2) + 1);
  return {
    diagonal: diag_len,
    aspect_ratio: aspect_ratio,
    width: width,
    height: height,
    area: width * height
  }
}


