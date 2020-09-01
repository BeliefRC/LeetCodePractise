/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const maxY = matrix.length
  if (maxY === 0) return
  const maxX = matrix[0].length
  const zeroY = new Map()
  const zeroX = new Map()
  for (let i = 0; i < maxY; i++) {
    for (let j = 0; j < maxX; j++) {
      if (matrix[i][j] === 0) {
        zeroY.set(i, true)
        zeroX.set(j, true)
      }
    }
  }

  for (let y of zeroY.keys()) {
    for (let i = 0; i < maxX; i++) {
      matrix[y][i] = 0
    }
  }
  if (zeroY.size === maxY) {
    return
  }
  for (let x of zeroX.keys()) {
    for (let i = 0; i < maxY; i++) {
      matrix[i][x] = 0
    }
  }
}
