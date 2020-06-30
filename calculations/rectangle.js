module.exports = class Rectangle {
  
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

  get aspectRatio() {
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

  static calcDimensionsFromDiagonalRatio(diagLen, aspectRatio) {
    const diag = parseFloat(diagLen), ratio = Number(aspectRatio);
    return [
      diag / Math.sqrt((1 / Math.pow(ratio, 2)) + 1),
      diag / Math.sqrt(Math.pow(ratio, 2) + 1)
    ];
  }

  static calcDimensionsFromAreaRatio(area, aspectRatio) {
    const a = parseFloat(area), ratio = Number(aspectRatio);
    return [
      Math.sqrt(a / ratio) * ratio,
      Math.sqrt(a / ratio)
    ];
  }

  static calcWidthFromHeightRatio(height, aspectRatio) {
    return parseFloat(height) * Number(aspectRatio);
  }

  static calcHeightFromWidthRatio(width, aspectRatio) {
    return parseFloat(width) * Number(aspectRatio);
  }

  static isValidDimensions(dimensions) {
    if (Array.isArray(dimensions) && dimensions.length === 2) {
      return ( dimensions.filter(value => parseFloat(value) > 0).length === 2 ? true : false );
    }
  }

}
