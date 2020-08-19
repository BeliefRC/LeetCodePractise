/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0
  const len = height.length
  let left = 0
  let right = len - 1
  while (left < right) {
    const hl = height[left]
    const hr = height[right]
    const area = (right - left) * Math.min(hl, hr)
    result = Math.max(result, area)
    if (hl > hr) {
      right--
    } else {
      left++
    }
  }
  return result
}
