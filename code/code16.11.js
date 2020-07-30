/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  const res = []
  if (shorter === longer) {
    const len = shorter * k
    return len ? [len] : []
  }
  for (let i = 0; i <= k; i++) {
    const len = (shorter * (k-i)) + (longer * i)
    if (len && res.indexOf(len) === -1) {
      res.push(len)
    }
  }
  return res
}
