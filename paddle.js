function Paddle(pX) {
  this.x = pX;
  this.y = random(height / 2 - 30);
  this.w = 10;
  this.h = 60;
  this.speed = 8;
  this.time = 8;

  this.render = () => {
    fill(200);
    stroke(200);
    rect(this.x, this.y, this.w, this.h);
  };

  this.move = () => {
    if (keyIsDown(87) && this.y > 0) {
      this.y -= this.speed;
    } else if (keyIsDown(83) && this.y < 540) {
      this.y += this.speed;
    }

    if (this.y >= 540) {
      this.y = random(0, 520);
    }

    if (this.y <= 0) {
      this.y = random(0, 520);
    }

    if (frameCount % 60 == 0 && this.time > 0) {
      this.time--;
    }
    if (this.time == 0) {
      this.y = random(0, 520);

      this.time = 8;
    }
  };
}
