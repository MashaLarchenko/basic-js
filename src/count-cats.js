module.exports = function countCats(matrix) {
  let count = 0;
  if(matrix.length === 0) return count;
  matrix.forEach(item => {
    return item.forEach(item => {
      if(typeof(item) === 'string' && item.length === 2 && item === '^^') count++
    })
  })
  return count;
}
