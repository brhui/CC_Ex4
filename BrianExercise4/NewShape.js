function NewShape(x, y, r) {
  this.locX = x;
  this.locY = y;
  this.rad = r;

  this.display = function(){
    point(this.locX, this.locY);
  }
  
}

NewShape.prototype.grow = function(){
  this.rad += 5;
  this.rad = constrain(this.rad, 50, 150);

  if (this.rad > 5){
    this.rad += rectX;
  }
}