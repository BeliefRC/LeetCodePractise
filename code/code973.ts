function kClosest(points: number[][], K: number): number[][] {
  points.sort((a, b) => (Math.pow(a[0], 2) + Math.pow(a[1], 2)) -
    (Math.pow(b[0], 2) + Math.pow(b[1], 2)))
  points.length=K
  return points
}
