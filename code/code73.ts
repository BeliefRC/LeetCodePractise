/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes (matrix: number[][]): void {
  let n = matrix.length
  let m = n ? matrix[0].length : 0
  const h = {}
  const v = {}
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      h[i] = true
      v[j] = true
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (h[i] || v[j]) {
        matrix[i][j] = 0
      }
    }
  }
}

