const isSpare = (x, y) => {
  let total = x + y;
  if (x < 10) {
    return total === 10;
  }
  return false;
};

module.exports = isSpare;
