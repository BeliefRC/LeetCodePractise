/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const result = []

  function toggleCase (prev, rest) {
    if (prev.length === S.length) {
      result.push(prev)
      return
    }
    let char = rest[0]
    let up = char.toUpperCase()
    let low = char.toLowerCase()
    const str = rest.substr(1, rest.length - 1)
    if (up === low) {
      toggleCase(`${prev}${low}`, `${str}`)
    } else {
      toggleCase(`${prev}${low}`, `${str}`)
      toggleCase(`${prev}${up}`, `${str}`)
    }
  }

  toggleCase('', S)
  return result
}

console.log(letterCasePermutation('a1b2'))
