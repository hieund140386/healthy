const getRandNum = (min = 1, max = 6) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const utils = {
  getRandNum,
};

export default utils;
