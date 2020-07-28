/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j=0
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==0){
      const temp=nums[j]
      nums[j]=nums[i]
      nums[i]=temp
      j++
    }
  }
};
