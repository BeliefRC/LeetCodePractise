/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = []
  for (let i = left; i <= right; i++) {
    const nums = (i + '').split('')
    if (nums.every(item => i % item === 0)) {
      result.push(i)
    }
  }
  return result
}
