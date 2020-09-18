// 随机生成一个长度为 10 的整数类型的数组，
// 例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，
// 例如 [[2, 3, 4, 5], [10, 11], [20]]。
function convertArray(arr) {
  arr.sort((a,b) => a - b)
  let newArr = [...new Set(arr)]
  console.log('newArr', newArr)
  let obj = {}
  newArr.forEach(item => {
    let key = Math.floor(item / 10)
    if(obj[key] === undefined){
      obj[key] = []
    }
    obj[key].push(item)
  })
  let result = []
  for(let key in obj) {
    console.log(key)
    result.push(obj[key])
  }
  console.log('result', result)
}
let originArr = [2, 10, 3, 4, 5, 11, 10, 11, 20]
convertArray(originArr)

function convertArray2(arr) {
  arr.sort((a,b) => a - b)
  let newArr = [...new Set(arr)]
  console.log('newArr', newArr)
  let result = []
  newArr.forEach(item => {
    let index = Math.floor(item / 10)
    if(result[index] === undefined){
      result[index] = []
    }
    result[index].push(item)
  })
  console.log('result==result', result)
}
convertArray2(originArr)