module.exports = function transform(arr) {
  const controlsSequences = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];
  if (Array.isArray(arr)) {
    const transformedArr = [];
    let next = false;
    for (let i = 0; i < arr.length; i++) {
      if (next) {
        next = false
      } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
          transformedArr.pop();
      } else if (arr[i] === '--discard-next') {
        next = true;
      } else if (arr[i] === '--double-next') {
        if (i + 1 !== arr.length - 1 && arr[i + 1 ] !== undefined) {
          transformedArr.push(arr[i + 1]);
        }
      } else if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next') {
        if (i !== 0 && arr[i - 1 ] !== undefined) {
          transformedArr.push(arr[i - 1]);
        }
      } else {
        if (!controlsSequences.includes(arr[i])) {
          transformedArr.push(arr[i]);
        }
      }
    }
    return transformedArr;
  } else throw new Error()
}
