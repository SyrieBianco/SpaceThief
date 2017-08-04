
// import Ship from "./ship";
// import Gem from "./gem";
// import { randomGem } from "./gem_util";

class Game {
  constructor() {
    this.score = 0;
    this.ship = new Ship("assets/images/spaceship24.png");
    this.mines = [];
    this.gem = null;
    // bindings
    this.render = this.render.bind(this);
    this.renderScorePadding = this.renderScorePadding.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.generateMine = this.generateMine.bind(this);
    this.handleMineCollision = this.handleMineCollision.bind(this);
    this.waitForSpacebar = this.waitForSpacebar.bind(this);
    this.resetGame = this.resetGame.bind(this);
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
        this.mines.splice(j,1);
        this.mines.splice(i,1);
        this.handleMineCollision(mine1, mine2);
      }
    });
  });

  // const scoreText = this.renderScore();

  document.getElementById('score-padding').innerHTML = `${this.renderScorePadding()}`;
  document.getElementById('score').innerHTML = `${this.score} pts`;
  this.stage.update();
  }

  renderScorePadding(){
    if (this.score === 0) {
      return "00000";
    } else if (this.score < 1000) {
      return "000";
    } else if (this.score < 10000) {
      return "00";
    } else if (this.score < 100000) {
      return "0";
    } else {
      return "";
    }
}

  handleGemCollection(gem) {
    this.score += gem.pointValue;
    this.stage.removeChild(gem);
    this.placeNewGem();
    this.generateMine();
  }


  handleMineCollision(obj1, obj2) {
    // const explosion = this.generateExplosion(obj1, obj2);
    console.log("1", obj1, "2", obj2);
    this.stage.removeChild(obj1);
    this.stage.removeChild(obj2);
    this.generateExplosion(obj1, obj2);

    if (obj1 instanceof Ship) {
      this.gameOver();
    }
  };

  gameOver(){
    console.log("gameover!")
    createjs.Ticker.removeEventListener("tick", this.handleTick);
     let overText = new createjs.Text("GAME OVER", "80px Visitor", "#FF0000");
     overText.x = this.stage.canvas.width/2;
     overText.y = this.stage.canvas.length/2;
     overText.textBaseline = "alphabetic";
     this.stage.addChild(overText);

     let resetText = new createjs.Text("Press space to play again.", "40px Visitor", "#57CDFF");
     resetText.x = this.stage.canvas.width/2 + 100;
     resetText.y = this.stage.canvas.length/2 + 100;

     window.addEventListener("keydown", this.waitForSpacebar);
  }

  waitForSpacebar(event) {
    if (event.key === " ") {

      this.resetGame();
      window.removeEventListener("keydown", this.waitForSpacebar);
    }
  }

  resetGame(){
    this.stage.removeAllChildren();
    this.stage.clear();
    this.stage.update();

    //reset instance variables
    this.score = 0;
    this.ship = new Ship("assets/images/spaceship24.png");
    this.mines = [];
    this.gem = null;

    //re-render
    this.render();
  }

  placeNewGem() {
    const newGem = randomGem();

    newGem.configureGem(this);
    this.gem = newGem;
    this.stage.addChild(newGem);
  }


  generateMine(){
    const newMine = new Mine("assets/images/mine.png")

    newMine.configureMine(this);
    this.mines.push(newMine);
    this.stage.addChild(newMine);
  }

  generateExplosion(obj1, obj2){
    const xc = obj1.regX - obj2.regX;
    const yc = obj1.regY - obj2.regY;

    const x = xc + obj2.x;
    const y = yc + obj2.y;
    console.log("x", x);
    console.log("y", y);
    console.log("xc", xc);
    console.log("yc", yc);
    const explosion = new createjs.Bitmap("assets/images/explosion.png");
    explosion.x = x;
    explosion.y = y;
    explosion.regX = xc;
    explosion.regY = yc;

    this.stage.addChild(explosion);

    setTimeout( () => this.stage.removeChild(explosion), 500 )
  }




  render() {
    console.log("you added explosion changes!");
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
