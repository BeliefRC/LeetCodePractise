/*
输入:
  s = "abpcplea", d = ["ale","apple","monkey","plea"]

输出:
  "apple"
*/

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  let maxLen = 0
  let index = -1
  d.map((item, curIndex) => {
    let slow = 0
    let fast = 0
    const length = item.length
    while (slow < length && fast < s.length) {
      if (item[slow] === s[fast]) {
        slow++
        fast++
        if (slow === length &&
          (length > maxLen ||
            (length === maxLen && d[curIndex] < d[index]))) {
          maxLen = length
          index = curIndex
        }
      } else {
        fast++
      }
    }
  })
  return d[index] ? d[index] : ''
}
