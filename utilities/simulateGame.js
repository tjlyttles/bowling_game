let isStrike = require("./isStrike");
let isSpare = require("./isSpare");

class SimulateGame {
  constructor() {
    this.rolls = [];
    this.frameTotals = [];
  }
  bowl(pins) {
    this.rolls.push(pins);
  }

  get score() {
    let score = 0;
    let currentRoll = 0;

    for (let currentFrame = 0; currentFrame < 10; currentFrame++) {
      if (isStrike(this.rolls[currentRoll])) {
        score += this.strikeBonus(currentRoll);
        this.frameTotals.push(score);
        currentRoll++;
        continue;
      }
      const frameTotal = this.rolls[currentRoll] + this.rolls[currentRoll + 1];

      if (isSpare(frameTotal)) {
        score += this.spareBonus(currentRoll);
      } else {
        score += frameTotal;
      }
      this.frameTotals.push(score);
      currentRoll += 2;
    }
   
    return score;
  }
  spareBonus(currentRoll) {
    return 10 + this.rolls[currentRoll + 2];
  }
  strikeBonus(currentRoll) {
    return 10 + this.rolls[currentRoll + 1] + this.rolls[currentRoll + 2];
  }
}

module.exports = SimulateGame;
