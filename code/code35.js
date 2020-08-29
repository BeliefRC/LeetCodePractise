/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length
  let right = len - 1
  let left = 0
  while (left <= right) {
    let mid = (right + left) >> 1
    const value = nums[mid]
    if (value === target) {
      return mid
    }
    if (value < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  if (nums[right] > target) {
    return right
  } else {
    return right + 1
  }
}
