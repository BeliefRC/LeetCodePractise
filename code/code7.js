/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0
  while (x) {
    result = result * 10 + x % 10
    x = ~~x / 10
  }
  return (result | 0) === result ? result : 0
}
