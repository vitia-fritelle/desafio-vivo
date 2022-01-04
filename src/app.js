const { getTimestamp } = require("./utils");

function jobsApp(jobs, duration, minDate, maxDate) {
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
      if (object.duration < minDate || object.duration > maxDate) {
        // return timeStampValues.push(object);
      }
      return object;
    })
    .sort((a, b) => {
      return a.jobMaxEnd - b.jobMaxEnd;
    })
    .map((job, idx) => {
      accValue += job.duration;
      if (accValue <= duration) {
        jobsTemp = [...jobsTemp, job.id];
      }
      if (accValue > duration) {
        jobsFinal.push(jobsTemp);
        accValue = 0;
        jobsTemp = [job.id];
      }
      if (jobs.length - 1 === idx) {
        jobsFinal.push(jobsTemp);
      }
    });

  return jobsFinal;
}

module.exports = {
  jobsApp,
};
