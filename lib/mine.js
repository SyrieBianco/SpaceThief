// import GameObject from "./game_object"

class Mine extends GameObject {
  constructor(options) {
    super(options);
  }

  configureMine(game) {
    // this.configure(game);
    // this.image.crossOrigin = '';

    const mineSize = 24;

    const height = game.stage.canvas.height;
    const width = game.stage.canvas.width;

    let x = Math.floor(Math.random() * width - mineSize) + mineSize;
    let y = Math.floor(Math.random() * height - mineSize) + mineSize;

    this.x = x;
    this.y = y;
  }

  update(){

  }

  moveMine(canvas){

  }

}
