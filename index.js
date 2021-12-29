const fs = require("fs");

const fileBuffer = fs.readFileSync("./data.json");
const jobs = JSON.parse(fileBuffer);

console.table(jobs.jobs);
