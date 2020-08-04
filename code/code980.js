/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let result = 0
  const maxY = grid.length
  if (!maxY) return result
  const maxX = grid[0].length
  let legalPointsNum = 0
  const visited = []
  let startY = -1
  let startX = -1
  for (let i = 0; i < maxY; i++) {
    visited[i] = []
    for (let j = 0; j < maxX; j++) {
      if (grid[i][j] === 0) {
        legalPointsNum++
      } else if (grid[i][j] === 1) {
        startY = i
        startX = j
      }
    }
  }
  const isLegal = (y, x) => {
    return y >= 0 && y < maxY && x >= 0 && x < maxX && grid[y][x] !== -1 && !visited[y][x]
  }
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const dfs = (y, x, count) => {
    visited[y][x] = true
    const value = grid[y][x]
    if (count === legalPointsNum && value === 2) {
      result++
      return
    }
    if (value === 0) {
      count++
    }
    for (let [diffY, diffX] of directions) {
      const nextY = y + diffY
      const nextX = x + diffX
      if (isLegal(nextY, nextX)) {
        visited[nextY][nextX] = true
        dfs(nextY, nextX, count)
        visited[nextY][nextX] = false
      }
    }
  }
  dfs(startY, startX, 0)
  return result
}
