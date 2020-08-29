/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length
  let minIndex = len - 1
  if (len < 2) {
    return nums
  }
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      minIndex = i
      break
    }
  }
  if (minIndex === len - 1) {
    nums.reverse()
    return
  }
  for (let i = len - 1; i >= minIndex; i--) {
    if (nums[i] > nums[minIndex]) {
      const temp = nums[i]
      nums[i] = nums[minIndex]
      nums[minIndex] = temp
      const rest = nums.splice(minIndex + 1, len - minIndex - 1)
      nums.push(...rest.sort(((a, b) => a - b)))
      break
    }
  }
}
