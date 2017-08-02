


class Game {
  constructor() {
    this.score = 0;
    this.ship = new Ship();
    this.shipVel = new Vector;
    this.mines = {};

    // constants
    this.gravity = 9.81;
    this.drag = .1;
    this.accelerate = new Vector( -1, -1 );
    this.decelerate = new Vector( 1, 1 );
    this.rotation = .15;
    this.shipScale = 1;
    // this.frameRate =

    // size ship
    this.ship.scaleX = this.shipScale;
    this.ship.scaleY = this.shipScale;

    // bindings
    this.render = this.render.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  handleKeyPress(e) {
    switch (e.key) {
      case "ArrowUp":
        this.shipVel.sum( this.accelerate );
        break;
      case "ArrowDown":
        this.shipVel.sum( this.decelerate);
        break;
      case "ArrowLeft":
        this.shipVel.rotate(this.rotation);
        break;
      case "ArrowRight":
        this.shipVel.rotate(this.rotation *-1);
        break;

    }

  }




  render() {

    this.stage = new createjs.Stage(document.getElementById("gameCanvas"));

    createjs.Ticker.addEventListener("tick", this.handleTick)

    this.stage.addChild(this.ship);

    // position ship
    const shipOptions =
    this.ship.x = (this.stage.canvas.width - this.ship.image.width) / 2;
    this.ship.y = (this.stage.canvas.height - this.ship.image.height) / 2;


    this.stage.update();
    window.addEventListener("keydown", e => this.handleKeyPress(e));
  }


}
