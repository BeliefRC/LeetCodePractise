/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const maxY = matrix.length
  if (!maxY) return
  const maxX = matrix[0].length
  //转置矩阵
  for (let i = 0; i < maxY; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  const mid = maxX >> 1
  // 翻转每一列
  for (let i = 0; i < maxY; i++) {
    for (let j = 0; j < mid; j++) {
      [matrix[i][j], matrix[i][maxX - j - 1]] = [
        matrix[i][maxX - j - 1],
        matrix[i][j]]
    }
  }
}
