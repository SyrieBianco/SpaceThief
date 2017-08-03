// import { ndgmr.checkPixelCollision } from "../license/ndgmr.Collision";
// import Vector from "./vector"

class GameObject extends createjs.Bitmap {
  constructor(options) {
    super(options)
    this.velocity = new Vector();
  }

  move(){
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  configure(game){
    this.game = game;
    this.stage = game.stage;
    this.canvas = game.stage.canvas;
  }

  collideWith(otherObject) {
    //default do nothing
  }

  detectCollision(otherObject) {
    let that = this;
    ndgmr.checkPixelCollision(that, otherObject, 0);
  }

  remove() {
    let that = this;
    this.stage.removeChild(that);
  }
}

// export default GameObject;
