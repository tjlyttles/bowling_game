let isStrike = require("./isStrike");

it("Returns true on a strike(10)", () => {
  expect(isStrike(10)).toEqual(true);
});
it("Returns false on with no strike", () => {
  expect(isStrike(5)).toEqual(false);
});
