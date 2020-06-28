class Rectangle {
  
  constructor(width, height) {
    this.width = parseFloat(width);
    this.height = parseFloat(height);
  }
  
  get dimensions() {
    return [this.width, this.height];
  }
  
  set dimensions(sizes) {
    if (!Rectangle.isValidDimensions(sizes)) {
      console.log('Dimensions failed to update, check input array for mistakes.');
      return;
    }
    this.width = parseFloat(sizes[0]);
    this.height = parseFloat(sizes[1]);
  }
  
  get diagonal() {
    return Rectangle.calcDiagonalLength(this.width, this.height);
  }

  get area() {
    return Rectangle.calcArea(this.width, this.height);
  }

  get aspect_ratio() {
    return Rectangle.calcAspectRatioFloat(this.width, this.height);
  }

  static calcArea(width, height) {
    return parseFloat(width) * parseFloat(height);
  }

  static calcPerimeter(width, height) {
    return 2 * (parseFloat(width) + parseFloat(height));
  }

  static calcDiagonalLength(width, height) {
    // Pythagorean theorem: c = sqrt(a^2 + b^2) on array containing sides a & b
    return Math.hypot(width, height);
  }

  static calcAspectRatioFloat(width, height) {
    return parseFloat(width) / parseFloat(height);
  }

  static calcDimensionsFromDiagonalRatio(diag_len, aspect_ratio) {
    const diag = parseFloat(diag_len), ratio = Number(aspect_ratio);
    return {
      width: diag / Math.sqrt((1 / Math.pow(ratio, 2)) + 1),
      height: diag / Math.sqrt(Math.pow(ratio, 2) + 1),
      diagonal: diag_len,
      aspect_ratio: aspect_ratio
    }
  }

  static calcHeightFromWidthRatio(width, aspect_ratio) {
    // const width = parseFloat(width), ratio = Number(aspect_ratio);
  }

  static calcWidthFromHeightRatio(height, aspect_ratio) {
    // const height = parseFloat(height), ratio = Number(aspect_ratio);
  }

  static isValidDimensions(dimensions) {
    if (Array.isArray(dimensions) && dimensions.length === 2) {
      return ( dimensions.filter(value => parseFloat(value) > 0).length === 2 ? true : false );
    }
  }

}

const box = new Rectangle(16,9);
console.log(box.width); // Expect 16
console.log(box.height); // Expect 9
console.log(box.area); // Expect 144
console.log(box.diagonal); // Expect 18.36
console.log(box.aspect_ratio); // Expect 1.7778
console.log(Rectangle.calcDimensionsFromDiagonalRatio(box.diagonal, box.aspect_ratio));
box.dimensions = ['11.278"','7.049"'];
console.log(box.width); // Expect 11.278
console.log(box.height); // Expect 7.049
console.log(box.area); // Expect 79.498622
console.log(box.diagonal); // Expect 13.3
