const subsets = (nums) => {
  const res = []
  const dfs = (index, list) => {
    const arr = [].concat(list)
    if (index === nums.length) {
      res.push(arr)
    } else {
      //选择该元素
      arr.push(nums[index])
      dfs(index + 1, arr)
      arr.pop()
      dfs(index + 1, arr)
    }
  }
  dfs(0, [])
  return res
}
