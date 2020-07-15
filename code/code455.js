/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a,b)=>a-b)
  s.sort((a,b)=>a-b)
  let res=0
  let i=0
  let j=0
  while(i<g.length&&j<s.length){
    const need=g[i]
    const provide=s[j]
    if(need<=provide){
      res++
      i++
      j++
    }else{
      j++
    }
  }
  return res
};


/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a,b)=>a-b)
  s.sort((a,b)=>a-b)
  let res=0
  for(let i=0;i<g.length;i++){
    const index=s.findIndex(item=>item>=g[i])
    if(index>-1){
      res++
      s.splice(0,index+1)
    }else{
      break
    }
  }
  return res
};
