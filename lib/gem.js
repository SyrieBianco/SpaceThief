// import GameObject from "./game_object"

class Gem extends GameObject{
  constructor(options) {
    super(options);
    this.pointValue = options.pointValue;
  }

  configureGem(game) {
    // this.configure(game);
    // this.image.crossOrigin = '';

    const gemSize = 24;

    const height = game.stage.canvas.height;
    const width = game.stage.canvas.width;

    let x = Math.floor(Math.random() * width - gemSize) + gemSize;
    let y = Math.floor(Math.random() * height - gemSize) + gemSize;

    this.x = x;
    this.y = y;
  }

}

//export default Gem
