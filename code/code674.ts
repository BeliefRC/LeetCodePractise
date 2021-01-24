function findLengthOfLCIS(nums: number[]): number {
  const length = nums.length
  if (length < 2) {
    return length
  }
  let slow = 0
  let fast = 1
  let maxNum = 1
  while (fast < length) {
    if (nums[fast] > nums[fast - 1]) {
      maxNum = Math.max(maxNum, fast - slow + 1)
    } else {
      slow = fast
    }
    fast++
  }
  return maxNum
};
