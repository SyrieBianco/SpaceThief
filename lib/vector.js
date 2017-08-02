
class Vector {
  constructor( x, y ) {
    this.x = x || parseFloat(0.0);
    this.y = y || parseFloat(0.0);
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

  // manipulations

  scale( scalar ) {
      this.x *= scalar;
      this.y *= scalar;

  }


  setMag( mag2 ) {
    let mag1 = this.mag

    if ( mag1 > 0.0) {
      let scale = mag2 / mag1;
      this.x *= scale;
      this.y *= scale;
    } else {
      this.x = mag2;
      this.y = 0.0;
    }

  }

  normalize() {
    this.setMag(1.0);
  }

  sum( vector ) {
    this.x += vector.x;
    this.y += vector.y;
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
