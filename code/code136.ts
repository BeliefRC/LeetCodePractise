function singleNumber (nums: number[]): number {
  let ans = 0
  for (const num of nums) {
    ans ^= num
  }
  return ans
}
