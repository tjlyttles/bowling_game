let isSpare = require("./isSpare");
let isStrike = require("./isStrike");

const finalFrame = (x, y) => {
  let strike = isStrike(x);
  let bonusRoll = 0;
  if (isStrike(y) || isSpare(x, y)) {
    return (bonusRoll = Math.floor(Math.random() * Math.floor(11)));
  } else if (strike) {
    return (bonusRoll = Math.floor(Math.random() * Math.floor(11 - y)));
  }
  return bonusRoll;
};

module.exports = finalFrame;
