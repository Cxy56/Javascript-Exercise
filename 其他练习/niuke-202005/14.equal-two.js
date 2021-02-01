function identity(val1, val2) {
  if(val1 === val2) return val1 !== 0 || 1/val1 === 1/val2 // +0 !== -0
  if(val1 === null || val2 === null) return false
  if(val1 !== val1 ) return val2 !== val2 // NaN
  var type = typeof val1
  if(type !== 'function' && type !== 'object' && typeof val2 !== 'object'){
    return false
  }
  return deepEq(val1,val2)
}
function deepEq(val1, val2){
  var arrArray = [].toString.call(val1) === '[Object Array]'
  if(!arrArray) {
    // 对象
    if(typeof val1 !== 'object' || typeof val2 !== 'object'){
      return false
    }
    var keys = Object.keys(val1),
    key;
    length = keys.length;

    if (Object.keys(val2).length !== length) return false;
    while (length--) {
      key = keys[length];
      if (!(val2.hasOwnProperty(key) && identity(val1[key], val2[key]))) return false;
    }
    return true
  } else {
    // 数组比较
    length = val1.length;
    if (length !== val2.length) return false;

    while (length--) {
      if (!identity(val1[length], val2[length])) return false;
    }
    return true
  }
}

console.log(identity({a: 1}, {a: 2}))
console.log(identity([1,2], [1,2]))