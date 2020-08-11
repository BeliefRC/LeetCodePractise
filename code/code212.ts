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
    return y >= 0 && y < maxY && x >= 0 && x < maxX && !visited[y][x]
  }
  const getWords = (
    startY: number,
    startX: number,
    word: string,
    index: number,
  ): boolean => {
    const char = board[startY][startX]
    const targetChar = word[index]
    if (char === targetChar) {
      if (index === word.length - 1) {
        result.push(word)
        return true
      } else {
        visited[startY][startX] = true
        for (const [y, x] of directions) {
          const nextY = startY + y
          const nextX = startX + x
          if (isLegal(nextY, nextX)) {
            getWords(nextY, nextX, word, index + 1)
          }
        }
        visited[startY][startX] = false
      }
    }
    return false
  }

  const find = (word: string): void => {
    for (let i = 0; i < maxY; i++) {
      for (let j = 0; j < maxX; j++) {
        const isBreak = getWords(i, j, word, 0)
        if (isBreak) {
          return
        }
      }
    }
  }
  words.map(find)
  return Array.from(new Set(result))
}
