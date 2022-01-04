const { getTimestamp } = require("../src/utils");
const duration = "2 horas";

test("Expect to be a number", () => {
  expect(typeof getTimestamp(duration)).toBe("number");
});
test("Expect not to be a string", () => {
  expect(typeof getTimestamp(duration)).not.toBe("string");
});
test("Expect a data to return a timestamp", () => {
  expect(getTimestamp(duration)).toBe(2 * 60 * 60 * 1000);
});
