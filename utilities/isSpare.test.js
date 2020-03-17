let isSpare = require("./isSpare");

it("Returns true on a spare", () => {
  expect(isSpare(5, 5)).toEqual(true);
});
it("Returns false on with strike", () => {
  expect(isSpare(10, 0)).toEqual(false);
});
