/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  function getNum (start, len) {
    if (len + start > 10) {
      return false
    } else {
      let num = 0
      for (let i = len; i > 0; i--) {
        num += start++ * Math.pow(10, i - 1)
      }
      return num
    }
  }

  const res = []
  const minLen = ('' + low).length
  const maxLen = ('' + high).length
  for (let i = minLen; i <= maxLen; i++) {
    for (let j = 1; j <= 10 - i; j++) {
      const num = getNum(j, i)
      if (num >= low && num <= high) {
        res.push(num)
      } else if (num > high) {
        break
      }
    }
  }
  return res
}

sequentialDigits(100,300)
