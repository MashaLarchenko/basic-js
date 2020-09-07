module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
    if (date instanceof Date && !isNaN(date.valueOf()) && Object.getOwnPropertyNames(date).length === 0) {
      const month = +date.getMonth();
      let result = '';
      if (month >= 0 && month < 2 || month === 11) {
        result = 'winter';
      } else if (month >= 2 && month < 5) {
        result = 'spring';
      } else if (month >= 5 && month < 8) {
        result = 'summer';
      } else result = 'autumn'
      return result;
    } else throw new Error('Date is invalid');
};
