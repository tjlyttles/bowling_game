let finalFrame = require("./finalFrame");
let isStrike = require("./isStrike");
let isSpare = require("./isSpare");
let nextRound = require("./nextRound");

const simulateGame = () => {
  let knockedPins = [];
  let frameTotal = [];
  let strike = false;
  let spare = false;
  let currentScore = 0;
  let reserveScore = 0;
  let rolls;
  let multiplier = 0;

  for (rolls = 1; rolls < 22; rolls++) {
    // let bowl = Math.floor(Math.random() * Math.floor(11));
    let bowl = 10;
    let secondBowl = 0;
    strike = isStrike(bowl);
    knockedPins.push(bowl);
    if (nextRound(rolls)) {
      if (isStrike(knockedPins.slice(-2)[0])) {
        reserveScore += bowl;
      }
      if (isSpare(knockedPins.slice(-1)[0], knockedPins.slice(-2)[0])) {
        currentScore += reserveScore + bowl;
        frameTotal.push(currentScore);
      }
    } else {
      if (strike) {
        rolls++;
        reserveScore += bowl;
        knockedPins.push(secondBowl);
      } else {
        secondBowl = Math.floor(Math.random() * Math.floor(11 - bowl));
        rolls++;
        knockedPins.push(secondBowl);
      }
    }
    // if (knockedPins.length > 2) {
    //   console.log(knockedPins.slice(-2)[0]);
    // }
    // if (
    //   nextRound(rolls) &&
    //   isSpare(knockedPins.slice(-1)[0], knockedPins.slice(-2)[0])
    // ) {
    //   reserveScore += 10;
    // }
    // if (i === 21) {
    //   finalFrame();
    // }
    // Checks for the last frame
    // if (i === 21) {
    // On last frame check for third roll
    // finalFrame(firstBowl, secondBowl, thirdBowl);
    // currentScore += firstBowl + secondBowl + thirdBowl;
    // knockedPins.push(firstBowl, secondBowl, thirdBowl);
    // frameTotal.push(currentScore);
    // } else {
    //   secondBowl = Math.floor(Math.random() * Math.floor(11 - firstBowl));
    //   if (strike) {
    //     multiplier++;
    //     currentScore += 10 * multiplier + firstBowl + secondBowl;
    //     knockedPins.push(firstBowl, secondBowl);
    //     frameTotal.push(currentScore);
    //   } else if (spare) {
    //     currentScore += 10 + firstBowl;
    //     knockedPins.push(firstBowl, secondBowl);
    //     frameTotal.push(currentScore);
    //   }
    // }
    // strike = isStrike(firstBowl);
    // spare = isSpare(firstBowl, secondBowl);
    // knockedPins.push(firstBowl, secondBowl);

    // if (strike) {
    //   multiplier++;
    // }
    // if (!strike && !spare) {
    //   multiplier = 0;
    //   currentScore += firstBowl + secondBowl;
    //   frameTotal.push(currentScore);
    // }

    // console.log(
    //   "Frame: ",
    //   i,
    //   ", First: ",
    //   firstBowl,
    //   ", Second: ",
    //   secondBowl,
    //   ", Third: ",
    //   thirdBowl,
    //   ", Current: ",
    //   currentScore,
    //   ", Strike & Spare: ",
    //   strike,
    //   spare
    // );
  }
  console.log(knockedPins);
  console.log(frameTotal);
};

module.exports = simulateGame;
