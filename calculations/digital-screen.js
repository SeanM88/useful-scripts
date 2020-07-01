const Rectangle = require('./rectangle.js');

module.exports = class DigitalScreen {

  constructor(screenSize, horzRes, vertRes, units='in') {
    this.physicalUnits = units;
    this.digitalUnits = 'px';
    this.screenSize = parseFloat(screenSize);
    this.horizontalRes = parseFloat(horzRes);
    this.verticalRes = parseFloat(vertRes);
  }

  get _diagonalRes() {
    return Rectangle.calcDiagonalLength(this.horizontalRes, this.verticalRes);
  }

  get aspectRatio() {
    return Rectangle.calcAspectRatioFloat(this.horizontalRes, this.verticalRes);
  }

  get ppu() {
    return (this._diagonalRes / this.screenSize);
  }

  get totalPixels() {
    return Rectangle.calcArea(this.horizontalRes, this.verticalRes);
  }

  get screenWidth() {}

  get screenHeight() {}

  get screenArea() {
    return Rectangle.calcArea(this.screenWidth, this.screenArea);
  }

}
