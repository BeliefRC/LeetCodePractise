/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return []
  }
  const map = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ])

  let i = 0
  const len = digits.length
  const fn = (arr) => {
    const result = []
    const values = map.get(digits[i])
    if (arr.length === 0) {
      result.push(...values)
    } else {
      values.map(value => {
        arr.map(item => {
          result.push(item + value)
        })
      })
    }
    i++
    if (i < len) {
      return fn(result)
    }
    return result
  }

  return fn([])
}
