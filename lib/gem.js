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

    let x = Math.floor(Math.random() * (width - gemSize)) + gemSize / 2; //between 0+halfsize and width-halfsize
    let y = Math.floor(Math.random() * (height - gemSize)) + gemSize / 2;

    this.x = x;
    this.y = y;
  }

}

//export default Gem
