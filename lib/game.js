
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
    mine.update(this.ship);
    mine.moveMine(this.stage.canvas);
  });

  // Collision
  if (this.ship.detectCollision(this.gem)) this.handleGemCollection(this.gem);

  this.mines.forEach( (mine1, i) => {
    if (this.ship.detectCollision(mine1)) {
      this.handleMineCollision(this.ship, mine1);
    }

    this.mines.forEach( (mine2, j) => {
      if (i >= j) {return;}
      if (mine1.detectCollision(mine2)) {
        this.handleMineCollision(mine1, mine2);
      }
    });
  });

  this.stage.update();
  }


  handleGemCollection(gem) {
    this.score += gem.pointValue;
    console.log(this.score);
    this.remove(gem);
    this.placeNewGem();
    this.generateMine();
  }


  handleMineCollision(obj1, obj2) {
    console.log("I'm handling mine collision!");
    const explosion = this.generateExplosion(obj1, obj2);

    this.remove(obj1);
    this.remove(obj2);

    if (obj1 instanceof Ship) {
      this.gameOver();
    } else {
      console.log("two mines collided!");
      setTimeout(()=> this.remove(explosion), 1000);
    }
  };

  gameOver(){
    console.log("Game Over!");
    createjs.Ticker.removeEventListener("tick", this.handleTick);
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
    this.stage.addChild(newMine);
  }

  generateExplosion(obj1, obj2){
    const xc = obj1.regX - obj2.regX;
    const yc = obj1.regY - obj2.regY;

    const x = xc + obj1.regX;
    const y = yc + obj1.regY;

    const explosion = new createjs.Bitmap("./images/explosion.png");
    explosion.x = x;
    explosion.y = y;
    explosion.regX = xc;
    explosion.regY = yc;

    this.stage.addChild(explosion);

    return explosion;
  }

  render() {
    console.log(this.ship);
    this.stage = new createjs.Stage(document.getElementById("gameCanvas"));
    // configure and add ship to stage
    this.ship.configureShip(this);
    this.stage.addChild(this.ship);
    // place first gem
    this.placeNewGem();

    // test mine
    this.generateMine();

    createjs.Ticker.addEventListener("tick", this.handleTick);

    this.stage.update();

    window.addEventListener('keyup', (event) => { Key.onKeyup(event); }, false);
    window.addEventListener('keydown', (event) => { Key.onKeydown(event); }, false);
  }


}
