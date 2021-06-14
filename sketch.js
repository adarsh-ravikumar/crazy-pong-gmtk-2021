let leftPaddle;
let rightPaddle;
let ball;
let ln;
let restartTimer = 5;
let game;
let lost;

function setup() {
  createCanvas(500, 600);
  frameRate(60);
  resetSketch()
}

function draw() {
  game = ball.lost == false ? true : false;
  lost = ball.lost == true ? true : false;

  if (lost == true) {
    background(43);

    if (keyIsDown(82)) {
      lost = false;
      game = true;
      resetSketch()
    }

    fill(200);
    textAlign("center");
    textFont("QuickSand");

    textSize(50);
    text(`You lost!!`, width / 2, height / 2 - 20);

    textSize(20);
    text(`Press 'R' to try again`, width / 2, height / 2 + 50);

    textSize(16);
    text(`By Azrac Studios`, width / 2, 550);
    text(`Made for the GMTK jam 2021`, width / 2, 580);
  }

  if (game == true) {
    background(43);
    gameStarted = true;

    ln.render();
    leftPaddle.render();
    leftPaddle.move();

    rightPaddle.render();
    rightPaddle.move();

    ball.render();
    ball.move();
    textAlign("center");
    textFont("QuickSand");

    textSize(30);
    text(`Score: ${ball.score}`, width / 2, 55);

    textSize(17);
    text(`Paddle will reset in: ${leftPaddle.time}`, width / 2, 100);

    textSize(16);
    text(`By Azrac Studios`, width / 2, 550);
    text(`Made for the GMTK jam 2021`, width / 2, 580);
  }
}

function resetSketch() {
  ln = new Line();
  leftPaddle = new Paddle(50);
  rightPaddle = new Paddle(width - 50);
  ball = new Ball(leftPaddle, rightPaddle);
  restartTimer = 5  
}
