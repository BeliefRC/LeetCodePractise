function findWords (board: string[][], words: string[]): string[] {
  const result: string[] = []
  const maxY: number = board.length
  const maxX: number = maxY ? board[0].length : 0
  if (!maxY) {
    return result
  }
  const visited: boolean[][] = []
  for (let y = 0; y < maxY; y++) {
    visited[y] = []
  }
  const directions: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const isLegal = (y: number, x: number): boolean => {
    return y >= 0 && y < maxY && x > 0 && x < maxX && !visited[y][x]
  }
  const getWords = (
    startY: number,
    startX: number,
    word: string,
    countStr: string,
  ): void => {
    visited[startY][startX] = true
    for (let direction of directions) {
      const [y, x] = direction
      const nextY = startY + y
      const nextX = startX + x
      if (isLegal(nextY, nextX)) {
        countStr = countStr + board[nextY][nextX]
        if (countStr === word) {
          result.push(word)
        } else {
          getWords(nextY, nextX, word, countStr)
        }
      }
    }
    visited[startY][startX] = false
  }
  words.map(word => {
    for (let i = 0; i < maxY; i++) {
      for (let j = 0; j < maxX; j++) {
        getWords(i, j, word, board[i][j])
      }
    }
  })
  return result
}

findWords([
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v'],
  ]
  , ['oath', 'pea', 'eat', 'rain'])
