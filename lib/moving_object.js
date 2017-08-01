import Vector from "./vector";

class MovingObject {
  constructor(options){
    this.pos = options.pos;
    this.vel = options.vel || new Vector();
    this.game = options.game;

  }

  collideWith (otherObject) {

  }

  isCollidedWith(otherObject) {

  }

}

export default MovingObject;
