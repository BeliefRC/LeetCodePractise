/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  function helper (str) {
    let result = ''
    let index = 1
    const length = str.length
    for (let i = 0; i < length; i++) {
      if (str[i] === str[i + 1]) {
        index++
      } else {
        result += `${index}${str[i]}`
        index = 1
      }
    }
    return result
  }

  if (n === 1) {
    return '1'
  } else {
    return helper(countAndSay(n - 1))
  }
}


//正则表达式
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let prev = '1'
  for(let i = 1; i < n; i++){
    prev = prev.replace(/(\d)\1*/g, item =>`${item.length}${item[0]}`)
  }
  return prev
};

