const Rectangle = require('./rectangle.js');

module.exports = class DigitalScreen {

  constructor(screenSize, horzRes, vertRes, units='in') {
    this.screenSize = parseFloat(screenSize);
    this.physicalUnits = units;
    this.horizontalRes = parseFloat(horzRes);
    this.verticalRes = parseFloat(vertRes);
  }

  get aspectRatio() {
    // return Rectangle.calcAspectRatioFloat(this.horizontalRes, this.verticalRes);
  }

  get _diagonalRes() {
    return Rectangle.calcDiagonalLength(this.horizontalRes, this.verticalRes);
  }

}
