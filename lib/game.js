
// import Ship from "./ship";
// import Gem from "./gem";
// import { randomGem } from "./gem_util";

class Game {
  constructor() {
    this.score = 0;
    this.ship = new Ship("./images/spaceship24.png");
    this.mines = [];
    this.gem = null;
    // bindings
    this.render = this.render.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.remove = this.remove.bind(this);
    this.generateMine = this.generateMine.bind(this);
  }

  remove(object) {
    this.stage.removeChild(object);
  }


  handleTick() {

  // ship motion
  this.ship.update();
  this.ship.moveShip(this.stage.canvas);

  // mine motion
  this.mines.forEach(mine => {
    mine.update();
    mine.moveMine(this.stage.canvas);
  });

  // Collision
  if ( this.ship.detectCollision(this.gem) ) this.handleGemCollection(this.gem);


  this.stage.update();
  }

  handleGemCollection(gem) {
    this.score += gem.pointValue;
    console.log(this.score);
    this.remove(gem);
    this.placeNewGem();
    this.generateMine();
  }

  placeNewGem() {
    const newGem = randomGem();

    newGem.configureGem(this);
    this.gem = newGem;
    this.stage.addChild(newGem);
  }

  generateMine(){
    const newMine = new Mine("./images/mine.png")

    newMine.configureMine(this);
    this.mines.push(newMine);
    this.stage.addChile(newMine);
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
