function findMaxConsecutiveOnes(nums: number[]): number {
    let max=0
    let temp=0
    const length=nums.length
    for(let i=0;i<length;i++){
        if(nums[i]===1){
            max=Math.max(max,++temp)
        }else{
            temp=0
        }
    }
    return max
};
