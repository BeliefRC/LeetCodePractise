/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  function fn (prev, next) {
    if (prev.length === nums.length) {
      result.push(prev)
    } else {
      const temp = [].concat(next)
      const item = temp.pop()
      fn(prev.concat(item), temp)
    }
  }

  fn([], nums)
  return result
}
