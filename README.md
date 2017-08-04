## SpaceThief

### Background
Live: [SpaceThief](https://syriebianco.github.io/SpaceThief/)


[Github](https://github.com/ravisraval/BlingRunner)

SpaceThief is an arcade style game based on collecting tokens and avoiding space mines. The player must collect as many space rocks as possible without detonating the ever-increasing number of mines. The player navigates a ship via thrust and left-right rotational steering to collect space rocks in randomly generated positions and of varying value. Upon collection of each space rock, a moving space mine will generate. Space mines are sensitive to the gravitational fields of the player's spaceship, thus tracking the player.

Functionally, space mines explode upon collision with another mine. An explosion will also occur if the ship collides with a mine, instantly causing the player to lose.


### Functionality  

In this game, players will be able to:

- [ ] Start the game board
- [ ] Play the game by collecting space rocks
- [ ] View their current score
- [ ] Finish the game upon collision with a space mine

### Motion of the player and bombs

To simulate motion through space, I created a vector class that handles setting the direction and magnitude of vectors. Th

### Images

The layout for the game will be a single screen with a game field at the center, a link to an (optional to gameplay) about modal, a left sidebar displaying their current score and existing high scores (bonus), and a right sidebar with links to the creator's relevant materials as well as a legend for the gem values.

A display of the arrow keys will also feature at the bottom left of the board to make the UI intuitive

![wireframes](images/wireframe.png)

### Architecture and Technologies


The major technologies to be utilized in creating this game are:

- JavaScript and the `jquery` library for overall structure and game logic,
- an adaptation of [Marco Monster's Car Physics](http://www.asawicki.info/Mirror/Car%20Physics%20for%20Games/Car%20Physics%20for%20Games.html) to handle the control of the spaceship
- The Create.js suite for sound, image display, and animation.
- Specifically, the `Easel.js` library, in concert with `HTML5 Canvas,` handles collision detection and resolution.
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:


* `Physics` (`lib/physics.js`)
    * The physics engine for determining the motion of objects.

* `MovingObject` (`lib/moving_object.js`)
    * Base class for anything that moves.
    * Most important methods are `MovingObject.prototype.move`, `MovingObject.prototype.draw(ctx)`,
      `MovingObject.prototype.isCollidedWith(otherMovingObject)`.

* `Moving Object` will have three subclasses:
  * `Ship` (`lib/ship.js`)
      * The logic for the player's motion
  * `SpaceMine` (`lib/space_mine.js`)
      * The logic for the space mines' motion and ship-tracking
  * `SpaceRock` (`lib/space_rock.js`)
      * The logic for the random generation of gems, which inherits from `MovingObject`, even though these pieces will be static.

* `Game` (`lib/game.js`)
    * Holds collections of the ship, gems, and space mines.
    * Tracks the dimensions and bounds of the board.

* `GameView` (`lib/game_view.js`)
    * Holds the instance of the game and Canvas
    * Implements all key-listening and game-play logic

### Implementation Timeline

**Day 1**: Set up the environment by creating the configuration files (`webpack.config.js` and `package.json`), identifying all necessary modules, and installing Easel.js
Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Learn the basics of Easel.js, and successfully render an element.  

- Have a working environment and skeletal file structure
- Use `Easel.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to mastering Easel.js and writing the code for moving pieces.

- Complete the `physics.js` and `ship.js` modules
- Render a ship to a square grid on the `Canvas` using `Easel.js`
- Make the ship navigable by key-downs

**Day 3**: Perfect the physical logic for the spaceship and incorporate space mines and gem collection.  

- Handle the various collisions for both gem collection and space mine detonation
- Be able to track point values


**Day 4**: Polish the UI and adjust physical constants as necessary to enhance gameplay; style the frontend.

- Ensure proper functionality of gameplay
- Have a styled `Canvas`, nice looking controls and title


### Bonus features

Bonus features include:

- [ ] Adding a heat-seaking-like functionality to space mines by adding gravitational fields.
- [ ] Adding a high-score tracking feature that stores user data.
