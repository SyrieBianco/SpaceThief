import Vector from "./vector";

class Ship extends createjs.Bitmap{
  constructor(options) {
    this.pos = options.pos ||
    this.vel = options.vel || new Vector;
    super(options)
  }

}
