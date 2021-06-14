function Line() {
  this.w = 3;
  this.h = 25;
  this.render = () => {
    fill(50);
    stroke(50);
    rect(width / 2 - 1.5, 0, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 10 + 10, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 40 + 20, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 70 + 30, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 100 + 40, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 130 + 50, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 160 + 60, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 190 + 70, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 220 + 80, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 250 + 90, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 280 + 100, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 310 + 120, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 340 + 130, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 370 + 140, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 400 + 150, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 430 + 160, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 460 + 170, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 490 + 180, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 520 + 190, this.w, this.h);
    rect(width / 2 - 1.5, this.h + 550 + 200, this.w, this.h);
  };
}
