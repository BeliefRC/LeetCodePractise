/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = str.trim()
  const len = str.length
  let result = 0
  let flag = 1
  const reg = /[0-9]/

  function getResult () {
    return Math.max(Math.min(flag * result, 2 ** 31 - 1), -(2 ** 31))
  }

  for (let i = 0; i < len; i++) {
    const char = str[i]
    if (i === 0) {
      if (char === '-') {
        flag = -1
        continue
      }
      if (char === '+') {
        continue
      }
      if (!reg.test(char)) {
        return result
      }
    }
    if (reg.test(char)) {
      result = result * 10 + ~~char
    } else {
      return getResult()
    }
  }
  return getResult()
}
