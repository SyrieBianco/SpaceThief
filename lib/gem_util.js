// export
const GEMS = [
  {
    image: "./images/gem1.png",
    pointValue: 200,
    probability: 5
  },
  {
    image: "./images/gem2.png",
    pointValue: 100,
    probability: 1
  }
];

// export const GEMSWithProbability =
function GEMSWithProbability() {

  const probabilityArray = [];

  GEMS.forEach( gem => {

    for (var i = 0; i < gem.probability; i++) {
      probabilityArray.push(gem);
    }

  });

  return probabilityArray;
}

// export const randomGem =
function randomGem() {

  const newGEMS = GEMSWithProbability();
  const index = Math.floor(Math.random() * newGEMS.length);

  const gemOptions = newGEMS[index];

  const newGem = new Gem(gemOptions.image);
  newGem.pointValue = gemOptions.pointValue;

  return newGem;
}
