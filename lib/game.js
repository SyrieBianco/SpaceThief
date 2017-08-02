


class Game {
  constructor() {
    this.score = 0;
    this.ship = new Ship("./images/spaceship16.png");
    this.mines = {};

    // constants
    this.gravity = 9.81;
    this.drag = .1;
    this.accelerate = 1;
    this.decelerate = -1;
    this.rotate = 10;
    this.shipScale = 1;
    // this.frameRate =

    // bindings
    this.render = this.render.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  handleTick() {
    this.ship.moveShip(this.stage.canvas);



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
    document.body.addEventListener("keydown", function (e) {
      keys[e.keyCode] = true;
    });
    document.body.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false;
    });
  }


}
