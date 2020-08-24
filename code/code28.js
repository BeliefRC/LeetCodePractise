var strStr = function(haystack, needle) {
  if(!needle||haystack===needle){
    return 0
  }
  const len1=haystack.length
  const len2=needle.length
  for(let i=0;i<=len1-len2;i++){
    for(let j=0;j<len2;j++){
      if(haystack[i+j]!==needle[j]){
        break;
      }else{
        if(j===len2-1){
          return i
        }
      }
    }
  }
  return -1
};
