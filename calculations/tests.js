const Rectangle = require('./rectangle.js');
const DigitalScreen = require('./digital-screen.js');

function testRectangle() {
  let rect = new Rectangle(16,10);
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

function testDigitalScreen() {
  let macbook = new DigitalScreen(13.3, 2560, 1600);
  console.log(macbook.screenSize); // Expect 13.3
  // console.log(macbook.physicalWidth); // Expect 11.278
  // console.log(macbook.physicalHeight); // Expect 7.049
  console.log(macbook.physicalUnits); // Expect 'in'
  console.log(macbook.horizontalRes); // Expect 2560
  console.log(macbook.verticalRes); // Expect 1600
  console.log(macbook._diagonalRes); // Expect ~3019
  console.log(macbook.aspectRatio); // Expect 1.6

  
}

// testRectangle();
testDigitalScreen();
