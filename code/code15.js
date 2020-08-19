/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)
  const len = nums.length
  // 优化1: 整个数组同符号，则无解
  if (nums[0] <= 0 && nums[len - 1] >= 0) {
    for (let i = 0; i < len - 2; i++) {
      const midValue = nums[i]
      if (midValue > 0) break // 优化2: 最左值为正数则一定无解
      //中位数相同，直接跳过当前判断
      if (nums[i - 1] !== midValue) {
        let left = i + 1
        let right = len - 1
        while (left < right) {
          const leftValue = nums[left]
          const rightValue = nums[right]
          const value = midValue + leftValue + rightValue
          if (value < 0) {
            left++
          } else if (value > 0) {
            right--
          } else {
            result.push([midValue, leftValue, rightValue])
            while (left < right && nums[left] === nums[left + 1]) left++ // 去重
            while (left < right && nums[right] === nums[right - 1]) right-- // 去重
            left++
            right--
          }
        }
      }
    }
  }
  return result
}
