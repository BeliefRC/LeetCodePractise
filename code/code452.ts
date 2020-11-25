function findMinArrowShots(points: number[][]): number {
    const length=points.length
    if(length<2){
        return length
    }else{
        points.sort((a,b)=>a[0]-b[0])
        let result=1
        let max=points[0][1]
        for(let i=0;i<length;i++){
            if(points[i][0]<=max){
                max=Math.min(max,points[i][1])
            }else{
                result++
                max=points[i][1]
            }
        }
        return result
    }
};
