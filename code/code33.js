/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var low = 0, high = nums.length - 1
  while (low <= high) {
    const mid = Math.ceil((low + high) / 2)
    if (nums[mid] === target) {
      return mid
    }
    //左边有序
    if (nums[low] < nums[mid]) {
      if(nums[low]<=target&&nums[mid]>=target){
        high=mid-1
      }else {
        low=mid+1
      }
    }
    //右边有序
    else {
      if(nums[mid]<=target&&nums[high]>=target){
        low=mid+1
      }else {
        high=mid-1
      }
    }
  }
  return -1
};
