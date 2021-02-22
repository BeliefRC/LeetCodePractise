function isToeplitzMatrix(matrix: number[][]): boolean {
  const height = matrix.length
  const width = matrix[0].length
  for (let i = 0; i < height - 1; i++) {
    for (let j = 0; j < width - 1; j++) {
      const value = matrix[i][j]
      if (matrix[i + 1][j + 1] !== value) {
        return false
      }
    }
  }
  return true
};
