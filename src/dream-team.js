module.exports = function createDreamTeam(members) {
  const unsortedArr = [];
  if (Array.isArray(members)) {
    members.forEach(member => {
      if (typeof member === 'string') {
        const arrFromName = member.trim().split(' ');
        unsortedArr.push(arrFromName[0].toUpperCase().charCodeAt([0]));
      }
    });
    const sortedArr = unsortedArr.sort((a, b) => a - b);
    const result = sortedArr.reduce((acc, item) => {
      return acc += String.fromCharCode(item);
    }, '')
    return result;
  } else return false;
};
