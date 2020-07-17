/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s.length) {
    return true
  }
  let slow = 0
  let fast = 0
  while (slow < s.length && fast < t.length) {
    if (s[slow] === t[fast]) {
      slow++
      fast++
      if (slow === s.length) {
        return true
      }
    } else {
      fast++
    }
  }
  return false
}
