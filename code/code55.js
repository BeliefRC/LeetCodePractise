/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0
  const len = nums.length
  for (let i = 0; i <= max; i++) {
    const currentMax = i + nums[i]
    if (currentMax >= len - 1) {
      return true
    }
    max = Math.max(max, currentMax)
  }
  return false
}
