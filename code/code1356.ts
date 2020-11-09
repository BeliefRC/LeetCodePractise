//写一个函数，统计一个数的二进制数有几个1

//求当前数除以 2 的余数，如果余数是 1，说明当前二进制位是 1，count++
//然后将当前数除以 2，继续求与 2 的余数，继续统计，直到数字为 0。
//其实就是做 int 数的二进制转换，顺便统计每一位上 1 的个数

function sortByBits(arr: number[]): number[] {
    function countOne(num:number):number{
        let count =0
        while(num){
            if(num%2){
                count++
            }
            num=Math.floor(num/2)
        }
        return count
    }
    return arr.sort((a,b)=>countOne(a)-countOne(b)||a-b)
};


//二进制计算
function sortByBits(arr: number[]): number[] {
    function countOne(n:number):number{
         let count = 0;
    while (n !== 0) {
      count += n & 1;
      n >>= 1;
    }
    return count;
    }
    return arr.sort((a,b)=>countOne(a)-countOne(b)||a-b)
};
