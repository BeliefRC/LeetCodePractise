/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const maxY = grid.length
  const maxX = maxY ? grid[0].length : 0
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let result = 0

  let visited = []
  for (let y = 0; y < maxY; y++) {
    visited[y] = []
  }

  const isLegal = (y, x) => {
    return y >= 0 && y < maxY && x >= 0 && x < maxX && grid[y][x] !== 0 &&
      !visited[y][x]
  }
  const dfs = (y, x, current) => {
    for (let [diffY, diffX] of directions) {
      const nextY = y + diffY
      const nextX = x + diffX
      if (isLegal(nextY, nextX)) {
        const val = grid[nextY][nextX]
        const total = current + val
        visited[y][x] = true
        dfs(nextY, nextX, total)
        visited[y][x] = false
      } else {
        result = Math.max(result, current)
      }
    }
  }
  for (let i = 0; i < maxY; i++) {
    for (let j = 0; j < maxX; j++) {
      const current = grid[i][j]
      if (current !== 0) {
        dfs(i, j, current)
      }
    }
  }
  return result
}

console.log(getMaximumGold(
  [
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ],
))
