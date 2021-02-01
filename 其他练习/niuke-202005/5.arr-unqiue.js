// 为 Array 对象添加一个去除重复项的方法
// 输入
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
// 输出
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']

Array.prototype.uniq = function () {
  let arr = this
  let isNaNItem = false
  return arr.filter((item,index,array) => {
    if(typeof item === 'number' && item !== item && isNaNItem === false) {
      isNaNItem = true
      return array.indexOf(item)
    } else {
      return array.indexOf(item) === index
    }
  })
}

let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
console.log(arr.uniq())