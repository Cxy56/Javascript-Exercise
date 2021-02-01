function makeClosures(arr, fn) {
  let newArr = []
  for(let i = 0 ; i < arr.length; i++){
    newArr[i] = fn.bind(null,arr[i])
  }
  return newArr
}
let arr = [1, 2, 3]
let fn = function (x) { 
	return x * x; 
}
let res = makeClosures(arr, fn)
console.log(res[2]())