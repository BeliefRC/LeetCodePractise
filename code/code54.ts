function spiralOrder (matrix: number[][]): number[] {
  const arr: number[] = []
  const width = matrix[0] ? matrix[0].length : 1
  const height = matrix.length
  let top = 0, bottom = height - 1,
    left = 0, right = width - 1
  let i = 0
  while (i < width * height) {
    for (let j = left; j <= right; j++) {
      if (i === width * height) break
      arr.push(matrix[top][j])
      i++
    }
    top++
    for (let j = top; j <= bottom; j++) {
      if (i === width * height) break
      arr.push(matrix[j][right])
      i++
    }
    right--
    for (let j = right; j >= left; j--) {
      if (i === width * height) break
      arr.push(matrix[bottom][j])
      i++
    }
    bottom--
    for (let j = bottom; j >= top; j--) {
      if (i === width * height) break
      arr.push(matrix[j][left])
      i++
    }
    left++
  }
  return arr
}
