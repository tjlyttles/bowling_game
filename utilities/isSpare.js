const isSpare = (firstRoll, secondRoll) => {
  if (firstRoll < 10) {
    return firstRoll + secondRoll === 10;
  }
  return false;
};

module.exports = isSpare;
