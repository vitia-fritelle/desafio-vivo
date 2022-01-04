const { jobsApp } = require("../src/app");
const fs = require("fs");
const fileBuffer = fs.readFileSync("./database/data.json");
const { jobs } = JSON.parse(fileBuffer);
const maxDuration = 8 * 60 * 60 * 1000; //maxDuration is in miliseconds

const minDate = Date.parse("2019-11-10 09:00:00");
const maxDate = Date.parse("2019-11-11 12:00:00");

test("Expect to return an array with [[1,3],[2]]", () => {
  expect(jobsApp(jobs, maxDuration, minDate, maxDate)).toStrictEqual([
    [1, 3],
    [2],
  ]);
});
