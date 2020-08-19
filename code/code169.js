/** hasMap 数量达大于一般即可
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length===1){
    return nums[0]
  }
  const len=Math.ceil(nums.length/2)
  const map={}
  for(let num of nums){
    if(map[num]){
      map[num]+=1
      if(map[num]>=len){
        return num
      }
    }else{
      map[num]=1
    }
  }
};



/**
 * 排序：因为大于一半, 所以排序后的 中间那个数必是
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort((a,b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};

