// import { ndgmr.checkPixelCollision } from "../license/ndgmr.Collision";
// import Vector from "./vector"

class GameObject extends createjs.Bitmap {
  constructor(options) {
    super(options)
    this.velocity = new Vector();
    // this.game = options.game;
    // this.stage = options.stage;
    // this.canvas = options.canvas;

    //bindings
    this.setBounds = this.setBounds.bind(this);
  }

  move(){
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  setBounds(canvas, objectSize) {
    const height = canvas.height;
    const width = canvas.width;

    const halfSize = objectSize / 2;
    // set vertical bounds
    if (this.y > height - halfSize) { this.velocity.y = 0; this.y = height - (halfSize + 1);}
    if (this.y < halfSize) { this.velocity.y = 0; this.y = halfSize + 1;}
  // set horizontal bounds
    if (this.x > width) { this.velocity.x = 0; this.x = width - (halfSize + 1);}
    if (this.x < halfSize) { this.velocity.x = 0; this.x = halfSize + 1;}

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
