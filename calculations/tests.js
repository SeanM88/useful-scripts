const Rectangle = require('./rectangle.js');
const DigitalScreen = require('./digital-screen.js');

const rect = new Rectangle(16,10);
const macbook = new DigitalScreen(13.3, 2560, 1600);
const dell27 = new DigitalScreen(27, 2560, 1440);
const fireHD10 = new DigitalScreen(10.1, 1920, 1200);

function testRectangle(rect) {
  console.log(rect.width); // Expect 16
  console.log(rect.height); // Expect 10
  console.log(rect.dimensions); // Expect [16, 10]
  console.log(rect.area); // Expect 160
  console.log(rect.diagonal); // Expect 18.8679622641
  console.log(rect.aspectRatio); // Expect 1.6
  rect.dimensions = ['11.278"','7.049"'];
  console.log(rect.width); // Expect 11.278
  console.log(rect.height); // Expect 7.049
  console.log(rect.area); // Expect 79.498622
  console.log(rect.diagonal); // Expect 13.3
  console.log(Rectangle.calcDimensionsFromDiagonalRatio(18.8679622641, 1.6)); // Expect [16, 10]
}

function testDigitalScreen(screen) {
  console.log(screen.screenSize); // Expect 13.3
  // console.log(screen.physicalWidth); // Expect 11.278
  // console.log(screen.physicalHeight); // Expect 7.049
  console.log(screen.physicalUnits); // Expect 'in'
  console.log(screen.horizontalRes); // Expect 2560
  console.log(screen.verticalRes); // Expect 1600
  console.log(screen._diagonalRes); // Expect ~3019
  console.log(screen.aspectRatio); // Expect 1.6
  console.log(screen.ppu); // Expect ~227
}

// testRectangle(rect);
// testDigitalScreen(macbook);
// testDigitalScreen(dell27);
// testDigitalScreen(fireHD10);

