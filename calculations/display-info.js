class DisplayInfo {

  constructor(screenSize, pxWidth, pxHeight, units='in') {
    this.screenSize = screenSize;
    // this.physWidth = screenSize / Math.sqrt((1 / Math.pow(this.aspectRatio, 2)) + 1);
    // this.physHeight = screenSize / Math.sqrt(Math.pow(this.aspectRatio, 2) + 1);
    this.units = units;
    this.horizontalRes = pxWidth;
    this.verticalRes = pxHeight;
  }

  get _diagonalRes() {
    return DisplayInfo.calcDiagonalLength([this.horizontalRes, this.verticalRes]);
  }

  get physicalWidth()

  // get aspectRatio(width, height) {}
  
  static calcDiagonalLength(dimensions) {
    if (!Array.isArray(dimensions) || dimensions.length !== 2) {
      return undefined;
    }
    // Pythagorean theorem: c = sqrt(a^2 + b^2) on array containing sides a & b
    return Math.sqrt( dimensions.reduce((acc, item) =>  acc + Math.pow(parseFloat(item), 2), 0) );
  }
  
  static aspectRatioFloat(x, y) {
    return parseFloat(x) / parseFloat(y);
  }

}

const macbook = new DisplayInfo(13.3, 2560, 1600);
console.log(macbook.screenSize); // Expect 13.3
console.log(macbook.horizontalRes); // Expect 2560
console.log(macbook.verticalRes); // Expect 1600
console.log(macbook.units); // Expect 'in'
console.log(macbook._diagonalRes); // Expect ~3019



