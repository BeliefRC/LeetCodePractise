function matrixReshape(nums: number[][], r: number, c: number): number[][] {
    const arr=(nums as any).flat()
    if(arr.length===r*c){
        const result=[]
        for(let i=0;i<r;i++){
            const temp=[]
            for(let j=0;j<c;j++){
                temp.push(arr[(i*c)+j])
            }
            result.push(temp)
        }
        return result
    }else{
        return nums
    }
};
