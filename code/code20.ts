function isValid (s: string): boolean {
  s = s.trim()
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const arr = []
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      arr.push(map.get(s[i]))
    } else {
      const item = arr.pop()
      if (item !== s[i]) {
        return false
      }
    }
  }
  return !arr.length
}

isValid('()[]{}')
isValid('([)]')
isValid('{[]}')
