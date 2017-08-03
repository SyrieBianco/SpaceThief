
// import Ship from "./ship";
// import Gem from "./gem";
// import { randomGem } from "./gem_util";

class Game {
  constructor() {
    this.score = 0;
    this.ship = new Ship("./images/spaceship24.png");
    this.mines = {};
    this.gem = null;
    // bindings
    this.render = this.render.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(object) {
    this.stage.removeChild(object);
  }

  handleGemCollection(gem) {
    this.score += gem.pointValue;
    this.remove(gem);
    this.placeNewGem();
  }


  handleTick() {

  // ship motion
  this.ship.update();
  this.ship.moveShip(this.stage.canvas);

  // mine motion


  // Collision
  if ( this.ship.detectCollision(this.gem) ) this.handleGemCollection(this.gem);


  this.stage.update();
  }


  placeNewGem() {
    const newGem = randomGem();

    newGem.configureGem(this);
    this.gem = newGem;
    this.stage.addChild(newGem);
  }



  render() {
    this.stage = new createjs.Stage(document.getElementById("gameCanvas"));
    // configure and add ship to stage
    this.ship.configureShip(this);
    this.stage.addChild(this.ship);
    // place first gem
    this.placeNewGem();
    console.log(this.ship);
    console.log(this.gem);

    createjs.Ticker.addEventListener("tick", this.handleTick);

    this.stage.update();

    window.addEventListener('keyup', (event) => { Key.onKeyup(event); }, false);
    window.addEventListener('keydown', (event) => { Key.onKeydown(event); }, false);
  }


}
