// Child of NewShape.js
function NewSquare(x, y, r, c) {
  this.col = c;

  NewShape.call(this, x, y, r)

  //Extra function for GROW from Parent Class, squares move randomly on Y axis
  this.grow = function() {
    NewShape.prototype.grow.call(this);
    this.locY += random(-2, 2);
  }

  this.display = function() {
    noFill();
    rectMode(CENTER);
    stroke(this.col);
    rect(this.locX, this.locY, this.rad, this.rad);
  }
}

NewSquare.prototype = Object.create(NewShape.prototype);
NewSquare.prototype.constructor = NewShape;