/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  const length = nums.length
  let min = Infinity
  let res = 0
  for (let i = 0; i < length - 3; i++) {
    let left = i + 1
    let right = length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      const offset = Math.abs(target - sum)
      if (offset < min) {
        min = offset
        res = sum
      }
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else {
        return sum
      }
    }
  }
  return res
}
