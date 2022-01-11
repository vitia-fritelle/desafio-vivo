const getTimestamp = (duration) => {

  const index = duration.indexOf(" ") + 1;
  const durationValue = Number(duration.slice(0,index));
  const durationType = duration.slice(index, duration.length);
  const timeConversion = {
    "horas":60*60*1000,
    "minutos":60*1000,
    "segundos":1000
  };
  const conversionFactor = timeConversion[durationType];

  return (conversionFactor
          ?durationValue*conversionFactor
          :null);
};



module.exports = {
  getTimestamp,
};
