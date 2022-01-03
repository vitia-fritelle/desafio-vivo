const getTimestamp = (duration) => {
  let durationValue = Number(duration.slice(0, duration.indexOf(" ") + 1));
  let durationType = duration.slice(duration.indexOf(" ") + 1, duration.length);
  if (durationType === "horas") {
    return durationValue * 60 * 60 * 1000;
  }
  if (durationType === "minutos") {
    return durationValue * 60 * 1000;
  }
  if (durationType === "segundos") {
    return durationValue * 1000;
  }

  return null;
};

module.exports = {
  getTimestamp,
};
