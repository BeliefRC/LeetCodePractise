/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const length = intervals.length
  if (length < 2) {
    return intervals
  }
  intervals.sort((a, b) => a[0] - b[0])
  const result = [intervals[0]]
  for (let i = 1; i < length; i++) {
    const last = result[result.length - 1]
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(intervals[i][1], last[1])
    } else {
      result.push(intervals[i])
    }
  }

  return result
}
