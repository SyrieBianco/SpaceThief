
class Game {
  constructor() {
    this.score = 0;
    this.ship = new createjs.Bitmap("./images/spaceship16.png");
    this.shipVel = new Vector;
    this.mines = {};

    // constants
    this.gravity = 9.81;
    this.drag = .1;
    this.acceleration = 2.0;
    this.shipScale = 1;
    // this.frameRate =

    // size ship
    this.ship.scaleX = this.shipScale;
    this.ship.scaleY = this.shipScale;

    // bindings
    this.render = this.render.bind(this);
    this.handleTick = this.handleTick.bind(this);
  }


  handleTick() {
// ship motion
  this.ship.x += this.shipVel.x;
  this.ship.y += this.shipVel.y;
  // account for resistive frictional forces
  if (this.shipVel.mag > 0) {
    this.shipVel.scale(1-this.drag);
  }



  // mine motion

  this.stage.update();
  }

  handleKeyPress() {

  }


  render() {

    this.stage = new createjs.Stage(document.getElementById("gameCanvas"));
    createjs.Ticker.addEventListener("tick", this.handleTick)
    this.stage.addChild(this.ship);
    this.stage.update();

  }


}
