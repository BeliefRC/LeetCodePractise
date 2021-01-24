function thousandSeparator2(num) {
  // 12,345,678.1234
  const[left,right]=num.toString().split('.')
  let len=left.length
  let index=0
  let result=''
  while(len>=0){
    if(index%3===0&&index!==0){
      result+=`,${left[len]}`
    }else{
      result+=left[len]
    }
    len--
    index++
  }
  result=result.split('').reverse().join('')
  if(right){
    return `${result}.&{right}`
  }else{
    return result
  }
}
