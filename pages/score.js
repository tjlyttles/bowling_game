// let currentScore = 30;
// let reserveScore = 14;
// let isStrike = false;
// let isSpare = false;

// const knockedPins = () => {
//   let firstBowl = 0;
//   let secondBowl = 0;
//   let frameTotal = 0;
//   //   firstBowl = Math.floor(Math.random() * Math.floor(11));
//   //   secondBowl = Math.floor(Math.random() * Math.floor(11 - firstBowl));
//   console.log("First Round: ", firstBowl + ", Second Round: " + secondBowl);
//   frameTotal = firstBowl + secondBowl;
//   if (isStrike && frameTotal < 10) {
//     currentScore += reserveScore + frameTotal;
//     console.log(currentScore);
//   }
//   if (isSpare && frameTotal < 10) {
//     currentScore += reserveScore + firstBowl;
//     console.log(currentScore);
//   }
//   if (firstBowl === 10) {
//     isStrike = true;
//     reserveScore += 10;
//     console.log(reserveScore);
//   } else if (frameTotal === 10) {
//     isSpare = true;
//     reserveScore += 10;
//     console.log(reserveScore);
//   } else {
//     currentScore += frameTotal;
//     console.log(currentScore);
//   }
// };

// test("Knocked over pins this frame: ", () => {
//   expect(knockedPins());
// });
