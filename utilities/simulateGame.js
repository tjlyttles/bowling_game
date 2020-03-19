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
  //Generates random numbers for rolls
  roll() {
    for (let i = 0; i < 10; i++) {
      let firstPins = Math.floor(Math.random() * Math.floor(11));
      let secondPins = Math.floor(Math.random() * Math.floor(11 - firstPins));
      //checks last frame for strike and handles bonus roll
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
  // generates scores for each frame
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
    console.log(this.rolls);
    console.log(this.frameTotals);
    return score;
  }
  // functions to handle spare and strike scores
  spareBonus(currentRoll) {
    if (currentRoll === 9) {
      return 10 + this.bonusRoll;
    }
    return 10 + this.rolls[currentRoll + 1].firstRoll;
  }
  strikeBonus(currentRoll) {
    let bonusScore = 10;
    //final frame
    if (currentRoll === 9) {
      console.log(
        "final frame: ",
        this.rolls[currentRoll].secondRoll,
        this.bonusRoll
      );
      return (bonusScore +=
        this.rolls[currentRoll].secondRoll + this.bonusRoll);
    }
    // if frame 9 add first and second roll of final frame
    if (currentRoll === 8) {
      return (bonusScore +=
        this.rolls[currentRoll + 1].firstRoll +
        this.rolls[currentRoll + 1].secondRoll);
    }
    if (isStrike(this.rolls[currentRoll + 1].firstRoll)) {
      //if next frame firstroll is a strike add next, next first roll

      return (bonusScore +=
        this.rolls[currentRoll + 1].firstRoll +
        this.rolls[currentRoll + 2].firstRoll);
    }

    return (
      bonusScore +
      this.rolls[currentRoll + 1].firstRoll +
      this.rolls[currentRoll + 1].secondRoll
    );
  }
}

module.exports = SimulateGame;
