function indexOf(arr,target,start = 0){
  if(start >= arr.length) return -1;
  // 小于-arr.length的处理
  start = start % arr.length
  console.log('start', start)
  if(start < 0) {
    start += arr.length; 
  }
  for(let i = start;i < arr.length; ++i){
    if(arr[i] === target) return i;
  }
  return -1;
}

console.log(indexOf([2, 3], 3, -1))