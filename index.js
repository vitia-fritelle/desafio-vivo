const fs = require("fs");
const { getDuration } = require("./utils");

const fileBuffer = fs.readFileSync("./data.json");
const { jobs } = JSON.parse(fileBuffer);
let timeStampValues = [];
jobs.map((job) => {
  //   console.log(job.ID);
  const object = {
    jobStart: Date.parse(job["Data Máxima de conclusão"]),
    duration: getDuration(job["Tempo estimado"]),
  };
  timeStampValues.push(object);
  //   console.log();
});
console.log(timeStampValues);
