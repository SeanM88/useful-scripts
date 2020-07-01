const Rectangle = require('./rectangle.js');

module.exports = class DigitalScreen {

  constructor() {
    this.size = {
      width: null,
      height: null,
      diagonal: null,
      area: null,
      units: null
    };
    this.resolution = {
      horizontal: null,
      vertical: null,
      diagonal: null,
      totalPixels: null
    };
    this.aspectRatio = {
      formatted: null,
      float: null
    };
    this.ppu = null;
  }

  set size(sizeInfo) {}
  set resolution(resInfo) {}
  set aspectRatio(ratio) {}
  set ppu(pxPerUnit) {}

  parseSize(sizeInfo) {}
  parseResolution(resInfo) {}
  parseAspectRatio(ratio) {}

  // size.diagonal: Rectangle.calcDiagonalLength(size.width, size.height)
  // size.width: Rectangle.calcDimensionsFromDiagonalRatio(size.diagonal, aspectRatio.decimal)[0]
  // size.height: Rectangle.calcDimensionsFromDiagonalRatio(size.diagonal, aspectRatio.decimal)[1]
  // size.area: Rectangle.calcArea(size.width, size.height)

  // resolution.diagonal: Rectangle.calcDiagonalLength(resolution.horizontal, resolution.vertical)
  // resolution.horizontal: Rectangle.calcDimensionsFromDiagonalRatio(resolution.diagonal, aspectRatio.decimal)[0]
  // resolution.vertical: Rectangle.calcDimensionsFromDiagonalRatio(resolution.diagonal, aspectRatio.decimal)[1]
  // resolution.totalPixels: Rectangle.calcArea(size.width, size.height)

  // aspectRatio.decimal: Rectangle.calcAspectRatioFloat(x, y) - can be size or res props
  
  // ppu: resolution.diagonal / size.diagonal

}
