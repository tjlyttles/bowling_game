let isSpare = require("./isSpare");
let isStrike = require("./isStrike");

const finalFrame = (x, y, z) => {
  let strike = isStrike(x);
  if (strike) {
    y = Math.floor(Math.random() * Math.floor(11));
  } else {
    y = Math.floor(Math.random() * Math.floor(11 - x));
  }
  if (isStrike(y) || isSpare(x, y)) {
    z = Math.floor(Math.random() * Math.floor(11));
  } else {
    z = Math.floor(Math.random() * Math.floor(11 - y));
  }
  console.log(x, y, z);
  return x, y, z;
};

module.exports = finalFrame;
