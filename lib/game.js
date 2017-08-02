


class Game {
  constructor() {
    this.score = 0;
    this.ship = new Ship("./images/spaceship16.png");
    this.mines = {};

    // constants
    this.gravity = 9.81;
    this.drag = .1;
    this.accelerate = new Vector (0, -1);
    this.decelerate = new Vector (0, 1);
    this.rotate = 10;
    this.shipScale = 1;
    // this.frameRate =

    // bindings
    this.render = this.render.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  handleTick() {
  // ship motion

    // boundary setting
    const height = this.stage.canvas.height;
    const width = this.stage.canvas.width;
        // set vertical bounds
    if (this.ship.y > height - 8) { this.ship.velocity.y = 0; this.ship.y = height - 9;}
    if (this.ship.y < 8) { this.ship.velocity.y = 0; this.ship.y = 8 + 1;}
      // set horizontal bounds
    if (this.ship.x > width) { this.ship.velocity.x = 0; this.ship.x = width - 9;}
    if (this.ship.x < 8) { this.ship.velocity.x = 0; this.ship.x = 8 + 1;}

    // move ship
    this.ship.x += this.ship.velocity.x;
    this.ship.y += this.ship.velocity.y;

    // account for resistive frictional forces
    if (this.ship.velocity.mag > 0) {
      this.ship.velocity.scale(1-this.drag);
    }



  // mine motion

  this.stage.update();
  }

  handleKeyPress(e) {
    switch (e.key) {
      case "ArrowUp":
        this.ship.throttle(this.accelerate);
        break;
      case "ArrowDown":
        this.ship.throttle(this.decelerate);
        break;
      case "ArrowLeft":
        this.ship.turn(this.rotate*-1);
        break;
      case "ArrowRight":
        this.ship.turn(this.rotate);
        break;

    }

  }

  // positionShip(ship) {
  //   ship.x = (this.stage.canvas.width - this.ship.image.width) / 2;
  //   ship.y = (this.stage.canvas.height - this.ship.image.height) / 2;
  // }



  render() {
    this.stage = new createjs.Stage(document.getElementById("gameCanvas"));
    this.ship.configureShip(this.stage.canvas);
    this.stage.addChild(this.ship);

    createjs.Ticker.addEventListener("tick", this.handleTick);




    this.stage.update();
    window.addEventListener("keydown", e => this.handleKeyPress(e));
  }


}
