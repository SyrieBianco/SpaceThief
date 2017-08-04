
// variables
const shipGravity = 300;
const drag = .9;
const accelerate = 1;
const decelerate = -1;
const rotate = 10;
const shipScale = 1;
const maxSpeed = 500;
const gravityDamper = .5


// key handling
const Key = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,

  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },

  onKeydown: function(e) {
    this._pressed[e.keyCode] = true;
  },

  onKeyup: function(e) {
    delete this._pressed[e.keyCode];
  }
};


// degree/radian conversions
const degrees = rad => (
    rad * 180 / Math.PI
);


const radians = deg => (
  deg * Math.PI / 180
);
