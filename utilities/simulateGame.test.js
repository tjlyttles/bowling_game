const SimulateGame = require("./simulateGame");

let game;
beforeEach(() => {
  game = new SimulateGame();
});

it("returns a score of 0", () => {
  rollMany(0, 0, 10);
  expect(game.score).toEqual(0);
});
it("returns a correct score for a spare", () => {
  game.bowl(5, 5);

  game.bowl(1, 3);
  rollMany(0, 0, 8);

  expect(game.score).toEqual(15);
});
it("returns a score for a strike", () => {
  game.bowl(10, 0);
  game.bowl(5, 3);
  rollMany(0, 0, 8);

  expect(game.score).toEqual(26);
});
it("returns a score for a perfect game not taking into account bonus roll", () => {
  rollMany(10, 0, 9);
  game.bowl(10, 10);
  expect(game.score).toEqual(290);
});

function rollMany(first, second, rolls) {
  for (let i = 0; i < rolls; i++) {
    game.bowl(first, second);
  }
}
