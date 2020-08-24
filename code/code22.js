/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []
  const help = (str, left, right) => {
    if (str.length === 2 * n) {
      res.push(str)
      return
    }
    if (left < n) {
      help(str + '(', left + 1, right)
    }
    if (right < left) {
      help(str + ')', left, right + 1)
    }
  }
  help('', 0, 0)
  return res
}
