/** 贪心
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity
  let prevSum = 0
  let length = nums.length
  for (let i = 0; i < length; i++) {
    const currentSum = prevSum < 0 ? nums[i] : nums[i] + prevSum
    prevSum = currentSum
    max = Math.max(currentSum, max)
  }
  return max
}

/** 动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0]
  let length = nums.length
  if (length === 1) return max
  for (let i = 1; i < length; i++) {
    if (nums[i - 1] >= 0) {
      nums[i] = nums[i] + nums[i - 1]
    }
    max = Math.max(max, nums[i])
  }
  return max
}
