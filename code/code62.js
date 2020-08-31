/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = [1]
  }
  arr[0] = Array(m).fill(1)
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
    }
  }
  return arr[n - 1][m - 1]
}
