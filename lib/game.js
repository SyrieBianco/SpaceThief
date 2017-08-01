const CONSTANTS = {
  gravity: 9.81,
  drag: 2.0,
  acceleration: 2.0,
  // frameRate:


}

class Game {
  constructor() {
    this.score = 0;
    this.render = this.render.bind(this);
  }



  render() {

    this.stage = new createjs.Stage(document.getElementById("gameCanvas"));
    this
  }

  const ship = new createjs.Bitmap("./images/spaceship.png");

  createjs.Ticker.addEventListener("tick", this.handleTick)

  stage.addChild(ship);
  stage.update();
}
