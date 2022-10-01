function setup() {
  createCanvas(400, 400);
}

let x = 200;
let y = 200;
let isEnterPressed = false;

function draw() {
  const c = color(187, 249, 252);
  const squishColor = color(115, 217, 200);
  background(c);
  fill(squishColor);

  if (keyIsPressed === true && isEnterPressed === false) {
    if (keyCode === RIGHT_ARROW && x + 5 <= 358) {
      x = x + 5;
    }
    if (keyCode === LEFT_ARROW && x - 5 >= 38) {
      x = x - 5;
    }
    if (keyCode === UP_ARROW && y - 5 >= 38) {
      y = y - 5;
    }
    if (keyCode === DOWN_ARROW && y + 5 <= 358) {
      y = y + 5;
    }

    if (keyIsPressed === true && keyCode === ENTER) {
      isEnterPressed = true;
    }

    
  }
  ellipse(x, y, 80, 80);
}

// if user has not pressed key
// keep changing squish's x and y values

// background color

// order matters! if you fill every object after will have color
