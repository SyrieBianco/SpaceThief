// import GameObject from "./game_object"

class Gem extends GameObject{
  constructor(options) {
    super(options);
    this.pointValue = options.pointValue;
  }

  configureGem(game) {
    // this.configure(game);

    const height = game.stage.canvas.height;
    const width = game.stage.canvas.width;

    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * width);

    this.x = x;
    this.y = y;
  }

}

//export default Gem
