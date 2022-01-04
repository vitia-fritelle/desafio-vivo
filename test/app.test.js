const { jobsApp } = require("../src/app");
const fs = require("fs");
const fileBufferA = fs.readFileSync("./database/data.json");
const jobsA = JSON.parse(fileBufferA);
const fileBufferB = fs.readFileSync("./database/dataB.json");
const jobsB = JSON.parse(fileBufferB);
const maxDuration = 8 * 60 * 60 * 1000; //maxDuration is in miliseconds
const minDate = Date.parse("2019-11-10 09:00:00");
const maxDate = Date.parse("2019-11-11 12:00:00");

describe("Testing App #1", () => {
  test("Expect to return an array with [[1,3],[2]]", () => {
    expect(
      jobsApp(jobsA.jobs, maxDuration, minDate, maxDate).jobsFinal
    ).toStrictEqual([[1, 3], [2]]);
  });
});

describe("Testing App #2", () => {
  test("Expect to return an array with [[1,3],[2]]", () => {
    expect(
      jobsApp(jobsB.jobs, maxDuration, minDate, maxDate).jobsFinal
    ).toStrictEqual([[1, 3], [4], [5, 6], [7, 8], [9, 2]]);
  });
});
