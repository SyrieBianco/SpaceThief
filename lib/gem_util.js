// export
const GEMS = [
  {
    image: "http://res.cloudinary.com/syriebianco/image/upload/v1504674456/gem1_bzchcn.png",
    pointValue: 1000,
    probability: 1
  },
  {
    image: "http://res.cloudinary.com/syriebianco/image/upload/v1504674456/gem2_abq1j6.png",
    pointValue: 800,
    probability: 2
  },
  {
    image: "http://res.cloudinary.com/syriebianco/image/upload/v1504674456/gem3_y7kncp.png",
    pointValue: 500,
    probability: 3
  },
  {
    image: "http://res.cloudinary.com/syriebianco/image/upload/v1504674456/gem4_qyzxcv.png",
    pointValue: 300,
    probability: 4
  },
  {
    image: "http://res.cloudinary.com/syriebianco/image/upload/v1504674457/gem5_rxgmph.png",
    pointValue: 200,
    probability: 6
  },
  {
    image: "http://res.cloudinary.com/syriebianco/image/upload/v1504674456/gem6_kgjxor.png",
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
