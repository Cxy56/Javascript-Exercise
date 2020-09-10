function mergeArr(arr1,arr2) {
  let res = []
  while(arr1.length > 0 && arr2.length > 0) {
    if(arr1[0] <= arr2[0]) {
      res.push(arr1.shift())
    } else {
      res.push(arr2.shift())
    }
  }
  res = res.concat(arr1).concat(arr2)
  console.log(res)
  return res
}

mergeArr([1,2,3,5,6,7,8], [0,1,2,5,7,9])

var a = ['A1','A2','B1','B2','C1','C2','D1','D2']
var b = ['A','B','C','D']
mergeArr(a, b)