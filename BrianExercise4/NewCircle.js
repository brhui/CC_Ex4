//Child of NewShape.js
function NewCircle(x, y, r, c) {
  this.col = c;
  
  NewShape.call(this, x, y, r)
  
  this.display = function(){
    noFill();
    stroke(this.col);
    ellipse(this.locX, this.locY, this.rad, this.rad);
  }
}

NewCircle.prototype = Object.create(NewShape.prototype);
NewCircle.prototype.constructor = NewShape;