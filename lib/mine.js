// import GameObject from "./game_object"
// import Vector from "./vector"

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

  update(ship){
    let x = ship.x - this.x;
    let y = ship.y - this.y;

    const position = new Vector(x, y);

    const acceleration = shipGravity / (position.mag * position.mag);

    position.setMag(acceleration);

    this.velocity.sum(position);
  }



  moveMine(canvas){
    this.setBounds(canvas, 10)
    this.move();
  }

}
