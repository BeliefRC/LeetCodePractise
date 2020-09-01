/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let one = 0
  let two = 1
  let result = one + two
  for (let i = 1; i <= n; i++) {
    result = one + two
    one = two
    two = result
  }
  return result
}
