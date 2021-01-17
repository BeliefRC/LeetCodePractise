function checkStraightLine (coordinates: number[][]): boolean {
  if (coordinates.length > 2) {
    const arr: number[] = []
    let prev: number
    for (let i = 1; i < coordinates.length; i++) {
      let temp: number
      const diffX = coordinates[i][0] - coordinates[i - 1][0]
      const diffY = coordinates[i][1] - coordinates[i - 1][1]
      if (diffX === 0) {
        temp = Infinity
      } else if (diffY === 0) {
        temp = -Infinity
      } else {
        temp = diffY / diffX
      }
      if (prev) {
        if (prev !== temp) {
          return false
        }
      }
      prev = temp
    }
    return true
  } else {
    return true
  }
}
