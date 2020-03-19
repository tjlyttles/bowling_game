let isStrike = require("./isStrike");
let isSpare = require("./isSpare");

class SimulateGame {
  constructor() {
    this.rolls = [];
    this.frameTotals = [];
    this.bonusRoll = 0;
  }
  bowl(first, second) {
    this.rolls.push({ firstRoll: first, secondRoll: second });
  }

  roll() {
    for (let i = 0; i < 10; i++) {
      let firstPins = Math.floor(Math.random() * Math.floor(11));
      let secondPins = Math.floor(Math.random() * Math.floor(11 - firstPins));
      if (i === 9) {
        if (isStrike(firstPins)) {
          secondPins = Math.floor(Math.random() * Math.floor(11));
          if (isStrike(secondPins)) {
            this.bonusRoll = Math.floor(Math.random() * Math.floor(11));
          } else {
            this.bonusRoll = Math.floor(
              Math.random() * Math.floor(11 - secondPins)
            );
          }
        } else if (isSpare(firstPins, secondPins)) {
          this.bonusRoll = Math.floor(Math.random() * Math.floor(11));
        }
      }
      this.bowl(firstPins, secondPins);
    }
  }
  get score() {
    let score = 0;
    let currentRoll = 0;
    for (let currentFrame = 0; currentFrame < 10; currentFrame++) {
      let frameTotal = 0;
      if (isStrike(this.rolls[currentRoll].firstRoll)) {
        score += this.strikeBonus(currentRoll);
        // console.log(score);
        this.frameTotals.push(score);
        currentRoll++;
        continue;
      }
      frameTotal =
        this.rolls[currentRoll].firstRoll + this.rolls[currentRoll].secondRoll;

      if (
        isSpare(
          this.rolls[currentRoll].firstRoll,
          this.rolls[currentRoll].secondRoll
        )
      ) {
        score += this.spareBonus(currentRoll);
      } else {
        score += frameTotal;
      }
      currentRoll++;
      this.frameTotals.push(score);
    }
    console.log(this.frameTotals);
    return score;
  }
  spareBonus(currentRoll) {
    if (currentRoll === 9) {
      return 10 + this.bonusRoll;
    }
    return 10 + this.rolls[currentRoll + 1].firstRoll;
  }
  strikeBonus(currentRoll) {
    let bonusScore = 10;
    console.log("current: ", currentRoll);
    console.log("first roll+1: ", this.rolls[currentRoll + 1].firstRoll);
    console.log("first roll+2: ", this.rolls[currentRoll + 2].firstRoll);
    if (currentRoll < 7) {
      if (
        isStrike(this.rolls[currentRoll + 2].firstRoll) &&
        isStrike(this.rolls[currentRoll + 3].firstRoll)
      ) {
        bonusScore += 10;
      }
    }

    return (
      bonusScore +
      this.rolls[currentRoll + 1].firstRoll +
      this.rolls[currentRoll + 1].secondRoll +
      this.bonusRoll
    );
  }
}

module.exports = SimulateGame;
