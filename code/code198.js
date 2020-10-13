/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  const dp = [].concat(nums)
  let max = 0
  let maxMoney = Math.max(dp[0], dp[1] || 0)
  for (let i = 2; i < nums.length; i++) {
    max = Math.max(max, dp[i - 2])
    dp[i] = dp[i] + max
    maxMoney = Math.max(maxMoney, dp[i])
  }
  return maxMoney
}
