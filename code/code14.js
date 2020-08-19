/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i = 0
  let result = ''
  const luck = strs.pop() || ''
  while (i > -1) {
    const char = luck[i]
    if (!char) {
      return result
    } else {
      if (strs.every(str => str[i] === char)) {
        result += char
        i++
      } else {
        return result
      }
    }
  }
}
