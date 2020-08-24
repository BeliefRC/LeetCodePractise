/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len=digits.length
  for(let i=len-1;i>=0;i--){
    const value=digits[i]
    const sum=value+1
    if(sum>9){
      digits[i]=0
      if(i===0){
        digits.unshift(1)
        return digits
      }
    }else{
      digits[i]=sum
      return digits
    }
  }
};
