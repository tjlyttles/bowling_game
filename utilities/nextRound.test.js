let nextRound = require("./nextRound");

it("Returns true on an even number", () => {
  expect(nextRound(7)).toBeTruthy();
});
it("Returns false on an odd number", () => {
    expect(nextRound(4)).toBeFalsy();
});
