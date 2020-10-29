function uniqueOccurrences(arr: number[]): boolean {
  const map=new Map()
  arr.forEach(item=>{
    if(map.has(item)){
      map.set(item,map.get(item)+1)
    }else{
      map.set(item,1)
    }
  })
  const temp=[...map.values()]
  return temp.length===[...new Set(temp)].length
};
