/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix (n) {
  let arr = []
  for (let i = 0; i < n; i++) arr[i] = []
  let top = 0, bottom = n - 1,
    left = 0, right = n - 1
  let num = 0
  while (num < n * n) {
    for (let i = left; i <= right; i++) {
      arr[top][i] = ++num
    }
    top++
    for (let i = top; i <= bottom; i++) {
      arr[i][right] = ++num
    }
    right--
    for (let i = right; i >= left; i--) {
      arr[bottom][i] = ++num
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      arr[i][left] = ++num
    }
    left++
  }
  return arr
}
