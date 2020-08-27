/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  for (let str of strs) {
    const sortStr = str.split('').sort().join('')
    if (map.has(sortStr)) {
      map.get(sortStr).push(str)
    } else {
      map.set(sortStr, [str])
    }
  }
  const result = []
  for (let value of map.values()) {
    result.push(value)
  }
  return result
}
