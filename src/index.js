
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let result = matrix.map((item, pos) => {
    if (pos === 0 || pos % 2 === 0) {
      item = item;
    } else {
      item = item.reverse();
    }
    return item;
  }).reduce((accumulator,item) => accumulator.concat(item), []);
  return result;
}
