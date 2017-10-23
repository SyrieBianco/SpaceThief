// export
const GEMS = [
  {
    image: "assets/images/gem1.png",
    pointValue: 1000,
    probability: 1
  },
  {
    image: "assets/images/gem2.png",
    pointValue: 800,
    probability: 2
  },
  {
    image: "assets/images/gem3.png",
    pointValue: 500,
    probability: 3
  },
  {
    image: "assets/images/gem4.png",
    pointValue: 300,
    probability: 4
  },
  {
    image: "assets/images/gem5.png",
    pointValue: 200,
    probability: 6
  },
  {
    image: "assets/images/gem6.png",
    pointValue: 100,
    probability: 8
  }
];

// export const GEMSWithProbability =
function GEMSWithProbability() {

  const probabilityArray = [];

  GEMS.forEach( gem => {

    for (let i = 0; i < gem.probability; i++) {
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
