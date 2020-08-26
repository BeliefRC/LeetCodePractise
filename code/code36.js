/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let flag = true
  const map = new Map

  function getNames (y, x) {
    const names = []
    names.push(`row${y}`)
    names.push(`col${x}`)
    names.push(`block${~~(y / 3)}-${~~(x / 3)}`)
    return names
  }

  for (let i = 0; i < 9; i++) {
    if (flag) {
      for (let j = 0; j < 9; j++) {
        //获取当前点所在的三个区间
        const names = getNames(i, j)
        names.map(name => {
          const value = board[i][j]
          if (map.has(name)) {
            const values = map.get(name)
            //判断所在区间内是否重复的值，不存在则添加
            if (value !== '.') {
              if (values.has(value)) {
                flag = false
                return false
              } else {
                values.add(value)
              }
            }
          } else {
            map.set(name, new Set([value]))
          }
        })
      }
    } else {
      break
    }
  }
  return flag
}
