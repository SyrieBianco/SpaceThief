const GEMS = [
  {
    image: "gem1.png",
    pointValue: 200,
    probability: 5
  },
  {
    image: "gem2.png",
    pointValue: 100,
    probability: 1
  }
];

function GEMSWithProbability() {

  const probabilityArray = [];

  GEMS.forEach( gem => {

    for (var i = 0; i < gem.probability; i++) {
      probabilityArray.push(gem);
    }

  });

  return probabilityArray;
}

function randomGem() {

  const newGEMS = GEMSWithProbability();
  const index = Math.floor(Math.random() * newGEMS.length);

  return newGEMS[index];
}
