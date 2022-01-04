const { jobs, maxDate, minDate, maxDuration } = require("../src/index");

test("Expect to jobs not be null", () => {
  expect(jobs).not.toBeNull();
});

test("Expect to maxDate be a number", () => {
  expect(typeof maxDate).toBe("number");
});

test("Expect to minDate be a number", () => {
  expect(typeof minDate).toBe("number");
});
test("Expect to maxDuration be a number", () => {
  expect(typeof maxDuration).toBe("number");
});
