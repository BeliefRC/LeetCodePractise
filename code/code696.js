/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  const length = s.length
  if (length === 1) return 0
  let j = 0
  let map = {
    '0': 0,
    '1': 0,
  }

  let result = 0
  for (let i = 0; i < length; i++) {
    if (s[i] !== s[j]) {
      if (map['0'] !== 0 && map['1'] !== 0) {
        result += Math.min(map['0'], map['1'])
        map[s[i]] = 0
      }
      j = i
    }
    map[s[i]]++
    if (i === length - 1) {
      result += Math.min(map['0'], map['1'])
    }
  }
  return result
}
