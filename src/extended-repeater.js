module.exports = function repeater(str, options) {
  let additionSeparator = '|';
  let separator = '+';
  let repeatTimes = 0;
  let addition = '';
  let additionRepeatTimes = 0;
  for (let prop in options) {
    if (options.hasOwnProperty(prop)) {
      switch (prop) {
        case 'additionSeparator':
          additionSeparator = options[prop];
          break;
        case 'separator':
          separator = options[prop];
          break;
        case 'repeatTimes':
          repeatTimes = options[prop];
          break;
        case 'addition':
          addition = options[prop];
          break;
        case 'additionRepeatTimes':
          additionRepeatTimes = options[prop];
          break;
      }
    }
  }
  const repeat = (str, num, separator) => {
    if (!num) return str;
    let result = ''
    for (let i = 1; i <= num; i++) {
      if (i !== num) {
        result += addSeparator(str, separator);
      } else {
        result += str;
      }
    }
    return result;
  }
  const addSeparator = (srt, separator) => {
    return `${srt}${separator}`
  }
  return repeat(`${String(str)}${repeat(addition, additionRepeatTimes, additionSeparator)}`, repeatTimes, separator)
};
