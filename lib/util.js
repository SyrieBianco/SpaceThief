
// variables
const gravity = 9.81;
const drag = .1;
const accelerate = 1;
const decelerate = -1;
const rotate = 10;
const shipScale = 1;


// key handling
const Key = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,

  isDown: (keyCode) => (
    this._pressed[keyCode]
  ),

  onKeydown: (e) => {
    this._pressed[e.keyCode] = true;
  },

  onKeyup: (e) => {
    delete this._pressed[e.keyCode];
  }
};



const degrees = rad => (
    rad * 180 / Math.PI
);


const radians = deg => (
  deg * Math.PI / 180
);
