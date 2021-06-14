function Ball(leftPaddle, rightPaddle) {
  this.x = width / 2;
  this.y = height / 2;
  this.ySpeed = 3;
  this.xSpeed = 3;
  this.hit1 = false;
  this.hit2 = false;
  this.lost = false;
  this.score = 0;

  this.render = () => {
    fill(200);
    ellipse(this.x, this.y, 20, 20);
    this.hit1 = collideRectCircle(
      leftPaddle.x,
      leftPaddle.y,
      leftPaddle.w,
      leftPaddle.h,
      this.x,
      this.y,
      20,
      20
    );

    this.hit2 = collideRectCircle(
      rightPaddle.x,
      rightPaddle.y,
      rightPaddle.w,
      rightPaddle.h,
      this.x,
      this.y,
      20,
      20
    );
  };

  this.move = () => {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x >= width - 20) {
      this.lost = true;
    }

    if (this.y <= 20) {
      this.ySpeed *= -1;
    }

    if (this.x <= 20) {
      this.lost = true;
    }

    if (this.y >= height - 20) {
      this.ySpeed *= -1;
    }

    if (this.hit1) {
      this.x += 5;
      this.y += 5;
      this.xSpeed *= -1;
      this.ySpeed *= -1;

      this.score++;
    }

    if (this.hit2) {
      this.x -= 5;
      this.y -= 5;
      this.xSpeed *= -1;
      this.ySpeed *= -1;
      this.score++;
    }
  };
}

