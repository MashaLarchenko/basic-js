const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    const activity = parseFloat(sampleActivity);
    if (activity <= 0 || activity > MODERN_ACTIVITY || isNaN(activity)) return false;
    const coef = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / coef);
  } else {
    return false;
  }
};
