let nextRound = require("./nextRound");

it("Returns true on an even number", () => {
  expect(nextRound(2)).toBeTruthy();
});
it("Returns false on an odd number", () => {
    expect(nextRound(9)).toBeFalsy();
});
