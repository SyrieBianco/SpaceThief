


class Game {
  constructor() {
    this.score = 0;
    this.mines = {};

    // constants
    this.gravity = 9.81;
    this.drag = .1;
    this.accelerate = new Vector( -1, -1 );
    this.decelerate = new Vector( 1, 1 );
    this.rotation = .15;
    this.shipScale = 1;
    // this.frameRate =

    // bindings
    this.render = this.render.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  handleTick() {
// ship motion
  this.ship.x += this.ship.vel.x;
  this.ship.y += this.ship.vel.y;
  // account for resistive frictional forces
  if (this.ship.vel.mag > 0) {
    this.ship.vel.scale(1-this.drag);
  }



  // mine motion

  this.stage.update();
  }

  handleKeyPress(e) {
    switch (e.key) {
      case "ArrowUp":
        this.ship.vel.sum( this.accelerate );
        break;
      case "ArrowDown":
        this.ship.vel.sum( this.decelerate);
        break;
      case "ArrowLeft":
        this.ship.vel.rotate(this.rotation*-1);
        break;
      case "ArrowRight":
        this.ship.vel.rotate(this.rotation);
        break;

    }

  }

  positionShip(ship) {
    ship.x = (this.stage.canvas.width - this.ship.image.width) / 2;
    ship.y = (this.stage.canvas.height - this.ship.image.height) / 2;
  }



  render() {
    this.stage = new createjs.Stage(document.getElementById("gameCanvas"));
    this.ship = new Ship("./images/spaceship16.png");

    this.positionShip(this.ship);
    this.stage.addChild(this.ship);

    createjs.Ticker.addEventListener("tick", this.handleTick);




    this.stage.update();
    window.addEventListener("keydown", e => this.handleKeyPress(e));
  }


}
