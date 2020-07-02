/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const arr = [...new Set(matrix.flat(Infinity).sort((a, b) => a - b))]
  const length = arr.length
  if (k >= length) {
    return arr[length - 1]
  } else {
    return [k]
  }
}

export default kthSmallest()
