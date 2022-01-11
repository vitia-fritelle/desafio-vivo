const { getTimestamp } = require("./utils");

function jobsApp(jobs, duration, minDate, maxDate) {
  let accValue = 0;
  let jobsTemp = [];
  let jobsFinal = [];
  let jobOutOfRange = [];

  const jobsFormatted = jobs
    .map((job) => {
      const jobMaxEnd = Date.parse(job["Data Máxima de conclusão"]);
      const duration = getTimestamp(job["Tempo estimado"]);
      const object = {
        id: job.ID,
        jobMaxEnd,
        duration,
      };
      if (jobMaxEnd-duration < minDate || jobMaxEnd > maxDate) {
        jobOutOfRange.push(job.ID);
      }
      return object;
    })
    .sort((a, b) => {
      return a.jobMaxEnd - b.jobMaxEnd;
    })
    .map((job, idx) => {
      accValue += job.duration;

      if (accValue > duration) {
        jobsFinal.push(jobsTemp);
        jobsTemp = [job.id];
        accValue = job.duration;
      } else if (jobs.length-1 === idx) {
        jobsFinal.push(jobsTemp);
      } else {
        jobsTemp = [...jobsTemp, job.id];
      }
  
    });

  return { jobsFinal, jobOutOfRange };
}

module.exports = {
  jobsApp,
};
