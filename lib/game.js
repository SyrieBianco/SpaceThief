
// import Ship from "./ship";
// import Gem from "./gem";
// import { randomGem } from "./gem_util";

class Game {
  constructor() {
    this.score = 0;
    this.ship = new Ship("./images/spaceship24.png");
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

  // Collision

  }


  placeNewGem() {
    const newGem = randomGem();

    newGem.configureGem(this);
    this.stage.addChild(newGem);
  }



  render() {
    this.stage = new createjs.Stage(document.getElementById("gameCanvas"));
    // configure and add ship to stage
    this.ship.configureShip(this);
    this.stage.addChild(this.ship);
    // place first gem
    this.placeNewGem();

    createjs.Ticker.addEventListener("tick", this.handleTick);


    this.stage.update();

    window.addEventListener('keyup', (event) => { Key.onKeyup(event); }, false);
    window.addEventListener('keydown', (event) => { Key.onKeydown(event); }, false);
  }


}
