// import GameObject from "./game_object";
// import Vector from "./vector";
// import {degrees, radians, Key, accelerate, decelerate, rotate} from "./util";

class Ship extends GameObject{
  constructor(options) {
    super(options);
  }

  configureShip(game) {
    // this.configure(game)
    this.image.crossOrigin = '';

    const width = this.image.width === 0 ? 16 : this.image.width;
    const height = this.image.height === 0 ? 16 : this.image.height;

    // center anchorpoint
    this.regX = width / 2;
    this.regY = width / 2;

    //centerShip on canvas

    this.x = (game.stage.canvas.width - width) / 2;
    this.y = (game.stage.canvas.height - height) / 2;
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
    if (Key.isDown(Key.LEFT)) this.turn(rotate*-1);
    if (Key.isDown(Key.RIGHT)) this.turn(rotate);
  }

  moveShip(canvas){
    // boundary setting
    const height = canvas.height;
    const width = canvas.width;

    const shipSize = 24;
    const halfShip = shipSize / 2;

        // set vertical bounds
    if (this.y > height - halfShip) { this.velocity.y = 0; this.y = height - (halfShip + 1);}
    if (this.y < halfShip) { this.velocity.y = 0; this.y = halfShip + 1;}
      // set horizontal bounds
    if (this.x > width) { this.velocity.x = 0; this.x = width - (halfShip + 1);}
    if (this.x < halfShip) { this.velocity.x = 0; this.x = halfShip + 1;}

    this.move();

    // account for resistive frictional forces
    if (this.velocity.mag > 0) {
      this.velocity.scale(1-this.drag);
    }
  }

}

// export default Ship;
