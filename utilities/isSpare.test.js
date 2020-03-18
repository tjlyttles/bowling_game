let isSpare = require("./isSpare");

it("Returns true on a spare", () => {
  expect(isSpare(10)).toEqual(true);
});
it("Returns false on with strike", () => {
  expect(isSpare(1)).toEqual(false);
});
