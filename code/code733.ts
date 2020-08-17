function floodFill (
  image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const maxY = image.length
  const maxX = image[0].length
  const px = image[sr][sc]
  const isLegal = (y: number, x: number): boolean => {
    //在边界范围内，像素相同,且未遍历过
    return y >= 0 && y < maxY && x >= 0 && x < maxX && image[y][x] === px &&
      image[y][x] !== newColor
  }
  const directions: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const fn = (y: number, x: number): void => {
    for (let [diffY, diffX] of directions) {
      const nextY = y + diffY
      const nextX = x + diffX
      if (isLegal(nextY, nextX)) {
        image[nextY][nextX] = newColor
        fn(nextY, nextX)
      }
    }
  }
  image[sr][sc] = newColor
  fn(sr, sc)
  return image
}
