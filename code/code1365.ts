function smallerNumbersThanCurrent (nums: number[]): number[] {
  const sortNum = [...nums].sort((a, b) => a - b)
  return nums.map((num, i) => sortNum.findIndex(item => item === num))
}
