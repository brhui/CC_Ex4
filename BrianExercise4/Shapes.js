// Class for 'R' Key Press Squares
function Square(x, y, c) {
  this.locX = x;
  this.locY = y;
  this.col = c;

  this.display = function(translateX, translateY) {
    noFill();
    stroke(this.col);
    push();
    translate(translateX + 20, translateY)
    rect(this.locX + random(10), this.locY + random(10), 45, 45);
    translate(translateX, translateY);
    rect(this.locX, this.locY, 45, 45);
    translate(translateX - 10, translateY - 10);
    rect(this.locX - random(10), this.locY - random(10), 45, 45);
    pop();
  }
}