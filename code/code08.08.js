var permutation = function (S) {
  const arr = S.split('').sort()
  const res = []
  const fn = (prev, next) => {
    if (next.length === 0) {
      //浅拷贝
      res.push([...prev])
    }
    for (let i = 0; i < next.length; i++) {
      const char = next[i]
      if (char !== next[i - 1]) {
        prev.push(char)
        fn(prev, next.filter((item, index) => index !== i))
        prev.pop()
      }
    }
  }
  fn([], arr)
  return res.map(item => item.join(''))
}
