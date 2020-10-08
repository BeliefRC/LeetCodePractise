/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  return s.reverse()
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const length=s.length
  for(let i=0;i<length;i++){
    const first=s.shift()
    s.splice(length-i-1,0,first)
  }
  return s
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const length=s.length
  for(let i=length-2;i>=0;i--){
    const item= s.splice(i,1)
    s.push(item[0])
  }
  return s
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left=0
  let right=s.length-1
  while(left<right){
    [s[left],s[right]]=[s[right],s[left]]
    left++
    right--
  }
  return s

};
