//!! forEach并不返回参数. 而map返回作用后的新数组, 回调函数的参数为：每一项、索引、原数组
Array.prototype._forEach = function (fn) {
  for(let i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}
/*
map方法第一个参数为一个回调函数，该函数拥有三个参数
第一个参数代表array数组中的每一项
第二个参数代表当前遍历的索引值
第三个参数代表数组本身
该函数中的this指向map方法的第二个参数，如果无则this指向丢失
 */
Array.prototype._map = function (fn, context) {
  let arrMap = []
  for(let i = 0; i < this.length; i++) {
    let res = fn.call(context, this[i], i, this)
    arrMap.push(res)
  }
  return arrMap
}
// !! filter函数返回一个新的数组, 过滤掉回调函数返回值不为true的项
Array.prototype._filter = function(fn) {
  let newArr = []
  for(let i = 0; i < this.length; i++) {
    let res = fn(this[i], i, this)
    if(res) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// !!find函数，返回第一个回调函数返回true的项,没有则返回undefined
Array.prototype._find = function(fn) {
  for(let i = 0; i < this.length; i++) {
    let res = fn(this[i], i, this)
    if(res) {
      return this[i]
    }
  }
  return undefined
}

// !!every,所有回调函数返回值都为true时 结果为true,否则为false
Array.prototype._every = function(fn) {
  let arr = this
  for(let i = 0; i < arr.length; i++) {
    let res = fn(arr[i], i, this)
    if(!res) return false
  }
  return true
}

// !!some,所有回调函数返回值一个为true 结果就为true, 否则为false
Array.prototype._some = function(fn) {
  let arr = this
  for(let i = 0; i < arr.length; i++) {
    let res = fn(arr[i], i, this)
    if(res) return true
  }
  return false
}

// !!reduce  最后一个回调函数的返回值为reduce的结果
Array.prototype._reduce= function(fn, initValue) {
  let arr = this
  if(arguments.length === 2) {
    arr.unshift(initValue)
  }
  let result = arr[0]
  for(let i = 1; i < arr.length; i++) {
    result = fn(result, arr[i], i, this)
  }
  return result
}