
class Gem extends createjs.Bitmap{
  constructor(options) {
    super(options);
    this.pointValue = options.pointValue;
  }

  configureGem(canvas) {
    const height = canvas.height;
    const width = canvas.width;

    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * width);

    this.x = x;
    this.y = y;
  }

}

//export default Gem
