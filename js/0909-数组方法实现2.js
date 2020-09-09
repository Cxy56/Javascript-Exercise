// !!splice方法
// 接收参数， startIndex, nums, item
Array.prototype._splice = function (start, delCount, ...addList) {
  const orgLen = this.length
  if(start < 0) {
    if(Math.abs(start) > orgLen) {
      start = 0
    } else {
      start += orgLen
    }
  }
  if(delCount === undefined) {
    delCount = orgLen - start
  }
  // 返回删除的数组
  const removeList = this.slice(start, start + delCount)
  // 修改原数组
  let addIndex = start
  const right = this.slice(start + delCount)
  addList.concat(right).forEach(item => {
    this[addIndex] = item
    addIndex++
  })
  this.length = addIndex

  return removeList
}

// 在数组原型链上实现删除数组重复数据的方法
Array.prototype.delDumplicate = function () {
  for(let i = 0; i < this.length; i++) {
    if(this.indexOf(this[i]) !== i) {
      this.splice(i,1)
    }
  } 
}

Array.prototype.delDumplicate2 = function () {
  return this.filter((item,index,arr) => {
    if(arr.indexOf(item) === index){
      return item
    }
  })
}

// !! 展开数组
// 1. 迭代实现（不断改变自身）
const flatten = function (arr) {
  while (arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr)
      console.log('arr', arr)
  }
  return arr
}
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
console.log(flatten(arr))

// 2. 递归
function flatArr(arr) {
  let res = [] 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] instanceof Array) {
      res.push(...flatArr(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

// 3. 利用generator函数
function *flat(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'object') { // arr[i] instanceof Array
      yield *flat(arr[i])
    } else {
      yield arr[i]
    }
  }
}

var gen = flat([1,2,3,[4,5]])
let res = []
for(let item of gen) {
  res.push(item)
}
console.log('res', res)