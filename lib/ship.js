

class Ship extends createjs.Bitmap{
  constructor(options) {
    super(options);
    this.velocity = new Vector();
    this.acceleration = 1
  }

  configureShip(canvas) {
    const width = this.image.width === 0 ? 16 : this.image.width;
    const height = this.image.height === 0 ? 16 : this.image.height;

    // center anchorpoint
    this.regX = width / 2;
    this.regY = width / 2;

    //centerShip on canvas

    this.x = (canvas.width - width) / 2;
    this.y = (canvas.height - height) / 2;
  }

  throttle(magnitude) {
    const theta = radians(this.rotation);
    this.velocity.x += (Math.sin(theta) * magnitude) ;
    this.velocity.y -= (Math.cos(theta) * magnitude) ;
  }

  turn(angle){
    this.rotation += angle;
  }

  update() {
    if (Key.isDown(Key.UP)) this.throttle(accelerate);
    if (Key.isDown(Key.DOWN)) this.throttle(decelerate);
    if (Key.isDown(Key.UP)) this.turn(this.rotate*-1);
    if (Key.isDown(Key.UP)) this.turn(this.rotate);
  }

  moveShip(canvas){
    // boundary setting
    const height = canvas.height;
    const width = canvas.width;
        // set vertical bounds
    if (this.y > height - 8) { this.velocity.y = 0; this.y = height - 9;}
    if (this.y < 8) { this.velocity.y = 0; this.y = 8 + 1;}
      // set horizontal bounds
    if (this.x > width) { this.velocity.x = 0; this.x = width - 9;}
    if (this.x < 8) { this.velocity.x = 0; this.x = 8 + 1;}

    // move ship
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // account for resistive frictional forces
    if (this.velocity.mag > 0) {
      this.velocity.scale(1-this.drag);
    }

  }


}
