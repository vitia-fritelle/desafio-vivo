const fs = require("fs");
const fileBuffer = fs.readFileSync("./database/data.json");
const { jobs } = JSON.parse(fileBuffer);
const maxDuration = 8 * 60 * 60 * 1000; //maxDuration is in miliseconds
const { jobsApp } = require("./app");

const minDate = Date.parse("2019-11-10 09:00:00");
const maxDate = Date.parse("2019-11-11 12:00:00");

const { jobsFinal, jobOutOfRange } = jobsApp(
  jobs,
  maxDuration,
  minDate,
  maxDate
);

if (jobOutOfRange.length === 0) {
  console.log(jobsFinal);
} else {
  console.log(`The jobs with ID(s): ${jobOutOfRange} are out of range`);
}

module.exports = {
  jobs,
  maxDuration,
  minDate,
  maxDate,
};
