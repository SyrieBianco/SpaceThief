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


    // center anchorpoint
    this.regX = mineSize / 2;
    this.regY = mineSize / 2;

    // place mine on canvas
    let x = Math.floor(Math.random() * width - mineSize) + mineSize;
    let y = Math.floor(Math.random() * height - mineSize) + mineSize;

    this.x = x;
    this.y = y;
  }

  update(ship){
    let x = ship.x - this.x;
    let y = ship.y - this.y;

    const position = new Vector(x, y);
    const distance = position.mag() / gravityDamper

    const acceleration = shipGravity / (distance * distance);

    position.setMag(acceleration);

    this.velocity.x += position.x;
    this.velocity.y += position.y;

    // account for resistive frictional forces for better UX
    if (this.velocity.mag() > 0) {
      this.velocity.scale(1 - mineDrag);
    }
  }



  moveMine(canvas){
    this.setBounds(canvas, 20)
    this.move();
  }

}
