function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

// the origin x and y
let x = 200;
let y = 200;
// checks if enter was pressed yet
let isEnterPressed = false;

// list of new coordinates cool!
const xPoints = [250, 170, 200, 210];
const yPoints = [195, 80, 100, 50];

// the address aka the index of each number in the arrays
let xIndex = 0;
let yIndex = 0;

function draw() {
  const c = color(187, 249, 252);
  const squishColor = color(115, 217, 200);
  background(c);
  fill(squishColor);
  
  if (keyIsPressed === true && keyCode === ENTER) {
    isEnterPressed = true;
  }

  if (frameCount % 2 === 0) {
    xIndex = xIndex + 1;
    yIndex = yIndex + 1;
  }

  if (xIndex >= 4 && yIndex >= 4) {
    xIndex = 0;
    yIndex = 0;
  }

  if (isEnterPressed === false) {
    x = xPoints[xIndex];
    y = yPoints[yIndex];
  }

  ellipse(x, y, 80, 80);
  // if xIndex equals 2 make it equal 0
  
}
// if user has not pressed key
// keep changing squish's x and y values

// background color

// order matters! if you fill every object after will have color
