/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const length = nums.length
  let i = 0
  let j = 0
  while (j < length) {
    const value = nums[i]
    if (value === 0) {
      const temp = nums.splice(i, 1)[0]
      nums.unshift(temp)
      i++
    }
    if (value === 2) {
      const temp = nums.splice(i, 1)[0]
      nums.push(temp)
    }
    if (value === 1) {
      i++
    }
    j++
  }
}
