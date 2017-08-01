"use strict";

class Vector2D {
  constructor( x, y ) {
    this.x = x || 0.0;
    this.y = y || 0.0;
    this.mag = Math.sqrt( x * x + y * y);
    this.angle = Math.atan2(y, x);
  }

  //getter methods

  // magnitude
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  //angle
  angle(){
    return Math.atan2(this.y, this.x);
  }


  // setter methods

  set( x, y ){
    this.x = x;
    this.y = y;
  }

  copy( vector ) {
    this.x = vector.x;
    this.y = vector.y;
    return this;
  }

  setMag( mag2 ) {
    let mag1 = this.mag();

    if ( mag1 > 0.0) {
      mag1 = mag2/ mag1;
    } else {
      this.x = mag2;
      this.y = 0.0;
    }

  }

  normalize() {
    this.setMag(1.0);
  }

  // dot product

  dot( vector ) {
    return this.x * vector.x + this.y * vector.y;
  }

  // determinant

  det( vector ) {
  	return this.x * vector.y - this.y * vector.x;
  }

  // angular rotation

  rotate (angle) {
    let x = this.x;
    let y = this.y;
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);

    this.x = x * cos - y * sin;
    this.y = x * sin + y * cos;
  }


}

//




Vec2.prototype.angle = function()
{
	return Math.atan2(this.y, this.x);
};

Vec2.prototype.setLen = function( l )
{
	var s = this.len();
	if( s > 0.0 )
	{
		s = l / s;
		this.x *= s;
		this.y *= s;
	}
	else
	{
		this.x = l;
		this.y = 0.0;
	}
};

Vec2.prototype.normalize = function()
{
	this.setLen(1.0);
};
