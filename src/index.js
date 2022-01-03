const fs = require("fs");
const { getTimestamp } = require("./utils");
const maxDuration = 8 * 60 * 60 * 1000;
const minStart = getTimestamp("2019-11-10 09:00:00");
const maxEnd = getTimestamp("2019-11-11 12:00:00");
const fileBuffer = fs.readFileSync("./database/data.json");
const { jobs } = JSON.parse(fileBuffer);
// console.log(minStart);
// console.log(maxEnd);
let accValue = 0;

let jobsTemp = [];
let jobsFinal = [];

const jobsFormatted = jobs
  .map((job) => {
    const object = {
      id: job.ID,
      jobMaxEnd: Date.parse(job["Data Máxima de conclusão"]),
      duration: getTimestamp(job["Tempo estimado"]),
    };
    if (object.duration <= maxDuration || object.duration >= maxDuration) {
      // return timeStampValues.push(object);
    }
    return object;
  })
  .sort((a, b) => {
    return a.jobMaxEnd - b.jobMaxEnd;
  })
  .map((job, idx) => {
    accValue += job.duration;
    if (accValue <= maxDuration) {
      jobsTemp = [...jobsTemp, job.id];
    }
    if (accValue > maxDuration) {
      jobsFinal.push(jobsTemp);
      accValue = 0;
      jobsTemp = [job.id];
    }
    if (jobs.length - 1 === idx) {
      jobsFinal.push(jobsTemp);
    }
  });
console.log(jobsFinal);
