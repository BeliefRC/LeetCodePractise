function validMountainArray (A: number[]): boolean {
  const length = A.length
  if (length < 3) {
    return false
  }
  let left = 0
  let right = length - 1
  while (left + 1 < length && A[left] < A[left + 1]) {
    left++
  }
  while (right - 1 >= 0 && A[right] < A[right - 1]) {
    right--
  }

  return left === right && left !== length - 1 && right !== 0
}
