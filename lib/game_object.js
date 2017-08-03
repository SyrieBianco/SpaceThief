// import { ndgmr.checkPixelCollision } from "../license/ndgmr.Collision";
// import Vector from "./vector"

class GameObject extends createjs.Bitmap {
  constructor(options) {
    super(options)
    this.velocity = new Vector();
    // this.game = options.game;
    // this.stage = options.stage;
    // this.canvas = options.canvas;
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


  detectCollision(otherObject) {
    let that = this;
    return ndgmr.checkPixelCollision(that, otherObject, 0);
  }

}

// export default GameObject;
