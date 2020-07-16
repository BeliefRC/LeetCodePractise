/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix[0]) return false
  let x = matrix[0].length - 1
  let y = 0
  while (x >= 0 && y < matrix.length) {
    if (target > matrix[y][x]) {
      y++
    } else if (target < matrix[y][x]) {
      x--
    } else {
      return true
    }
  }
  return false
}
