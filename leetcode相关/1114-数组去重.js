// !!数组去重，两层循环，遇到两个数组元素相等，index往后移，i和j先后相邻开始循环
function toUnquie (arr) {
  let len = arr.length
  let res = []
  for(let i = 0; i < len; i++) {
    for(let j = i+1; j < len; j++) {
      if(arr[i] === arr[j]){
        j = ++i
      }
    }
    res.push(arr[i])
  }
  console.log(`res`, res)
  return res
}
toUnquie([1,2,3,'4', 5, '1', 1, 4, 1])

// !!找出数组的不重复元素个数
function removeDuplicate (arr) {
  var ans = 0
  for (let i = arr.length; i--;) {
    console.log(`i`, i)
    console.log(`arr.length-`, arr.length)
    if (arr[i] === arr[i+1]){
      console.log(`arr[i]`, arr[i])
      arr.splice(i,1)
      continue;
    }
    else ans++;
  }
  console.log(`result`, arr)
  return ans
}

var number = removeDuplicate([1,2,3,3,4,5,5,5])
console.log(`number`, number)

// !! **************利用map结构，既可以去重，又可以计数

function removeDuplicate2(arr) {
  let hash = new Map()
  let count = 0
  let res = []
  for(let i = 0 ; i < arr.length; i++) {
    if(!hash.has(arr[i])) {
      count++
      hash.set(arr[i], true) 
      res.push(arr[i])
    }
  }
  console.log('count=======2', count)
  console.log('res=====2', res)
}
removeDuplicate2([1,2,3,'4', 5, '1', 1, 4, 1])
removeDuplicate2([1,2,3,3,4,5,5,5])