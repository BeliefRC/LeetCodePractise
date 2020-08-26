/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let midL = 0
  let midR = nums.length - 1

  if (target < nums[midL] || target > nums[midR]) {
    return [-1, -1]
  }

  function getR (left, right, target) {
    while (left <= right) {
      const mid = (left + right) >> 1
      //在右边
      if (target >= nums[mid]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return right
  }

  midR = getR(0, midR, target)
  if (nums[midR] !== target) return [-1, -1]
  midL = getR(0, midR - 1, target - 1)
  return [midL + 1, midR]
}
