/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0
  }
  //记录最大长度
  let maxLen = 1
  const len = s.length
  // 当剩余长度小于最大长度时，就没必要遍历了
  for (let i = 0; i < len - maxLen; i++) {
    //用来做重复校验
    const map = {}
    //当前字符串的长度
    let temp = 0
    for (let j = i; j < len; j++) {
      if (map[s[j]]) {
        i = ~~ map[s[j]]+ 1
        break
      } else {
        map[s[j]] = j + ''
        temp++
        if (temp > maxLen) {
          maxLen = temp
        }
      }
    }
  }
  return maxLen
}
