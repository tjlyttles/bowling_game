let finalFrame = require("./finalFrame");

it("Final frame on strike", () => {
  finalFrame(10, 0, 0);
});
it("Final frame on spare", () => {
  finalFrame(5, 5, 0);
});
it("Final frame on neither", () => {
  finalFrame(1, 4, 0);
});
