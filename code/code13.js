/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map={
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
  }
  const len=s.length
  let i=0
  let result=0
  while(i<len){
    const char=s[i]
    const value=map[char]
    const prevValue=map[s[i-1]]
    result+=value
    if(value>prevValue){
      result=result-(2*prevValue)
    }
    i++
  }
  return result
};
