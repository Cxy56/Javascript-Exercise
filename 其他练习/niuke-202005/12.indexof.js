function indexOf(arr, item) {
  let idx = -1
  for(let i = 0 ;i < arr.length; i++) {
    if(arr[i] === item){
      idx = i
      break
  }
}
  return idx
}

let res = indexOf([ 1, 2, 3, 4, 2], 2)

console.log('res', res)
