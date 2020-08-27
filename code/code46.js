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
      for (let i = 0; i < next.length; i++) {
        const temp = [].concat(next)
        const item = temp.splice(i, 1)
        fn(prev.concat(item), temp)
      }
    }
  }

  fn([], nums)
  return result
}
