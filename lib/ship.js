const congigureShip = (game) => {
  const shipOptions = {}

  // position ship on canvas

};

class Ship extends createjs.Bitmap{
  constructor(options) {
    super(options);
    this.velocity = new Vector();
    this.acceleration = new Vector( 0 , 1 );

  }

  configureShip(canvas) {
    // center anchorpoint
    this.regX = 16 / 2;
    this.regY = 16 / 2;

    //centerShip on canvas

    this.x = (canvas.width - this.image.width) / 2;
    this.y = (canvas.height - this.image.height) / 2;
  };

  throttle( acceleration ) {
    const dV = acceleration;
    dV.rotate( radians( this.rotation ));
    console.log("rotation", this.rotation);
    console.log("dV", dV);
    console.log("velocity",this.velocity)
    this.velocity.sum( dV );
  }

  turn(angle){
    this.rotation += angle;
  }


}
