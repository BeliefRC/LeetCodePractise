/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let num = 0
  let continueZero = 0
  for (let i = 0, len = flowerbed.length; i <= len; i++) {
    if (flowerbed[i] === 0) {
      continueZero += 1
    } else {
      let temNum = 0
      temNum = Math.floor((continueZero - 1) / 2)
      if (temNum < 0) temNum = 0
      num += temNum
      continueZero = 0
    }
  }
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n <= 1) {
    return true
  }
  return num >= n
}
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
