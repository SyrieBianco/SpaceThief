


class Game {
  constructor() {
    this.score = 0;
    this.ship = new Ship("./images/spaceship16.png");
    this.mines = {};

    // bindings
    this.render = this.render.bind(this);
    this.handleTick = this.handleTick.bind(this);
  }


  handleTick() {

  // ship motion
  this.ship.update();
  this.ship.moveShip(this.stage.canvas);

  // mine motion

  this.stage.update();
  };





  render() {
    this.stage = new createjs.Stage(document.getElementById("gameCanvas"));
    this.ship.configureShip(this.stage.canvas);
    this.stage.addChild(this.ship);

    createjs.Ticker.addEventListener("tick", this.handleTick);




    this.stage.update();
    window.addEventListener('keyup', (event) => { Key.onKeyup(event); }, false);
    window.addEventListener('keydown', (event) => { Key.onKeydown(event); }, false);
  }


}
