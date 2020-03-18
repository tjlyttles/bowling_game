const SimulateGame = require("./simulateGame");

let game;
beforeEach(() => {
  game = new SimulateGame();
});

it("returns a score of 0", () => {
  rollMany(0, 20);
  expect(game.score).toEqual(0);
});
it("returns a correct score for a spare", () => {
  game.bowl(5);
  game.bowl(5);
  game.bowl(3);
  rollMany(0, 17);

  expect(game.score).toEqual(16);
});
it("returns a score for a strike", () => {
  game.bowl(10);
  game.bowl(5);
  game.bowl(3);
  rollMany(0, 17);

  expect(game.score).toEqual(26);
});
it("returns a score for a perfect game", () => {
  rollMany(10, 20);

  expect(game.score).toEqual(300);
});

function rollMany(pins, rolls) {
  for (let i = 0; i < rolls; i++) {
    game.bowl(pins);
  }
}
