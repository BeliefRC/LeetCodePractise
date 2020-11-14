function insert (intervals: number[][], newInterval: number[]): number[][] {
  const length = intervals.length
  let i = 0
  const res = []
  while (i < length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i++])
  }
  while (i < length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }

  res.push(newInterval)
  while (i < length) {
    res.push(intervals[i++])
  }

  return res
}
