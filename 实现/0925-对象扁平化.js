/**
 *输入：  var entry = {
    a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
    }
  }
 */
// 变为： { 'a.b.c.dd': 'abcdd', 'a.d.xx': 'adxx', 'a.e': 'ae' }
// 1. *********************
function flatternObj(obj, parentKey = '', res = {}) {
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      let keyName = parentKey + key
      if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
        flatternObj(obj[key], keyName + '.', res)
      } else {
        res[keyName] = obj[key]
      }
    }
  }
  return res
}

var entry = {
  a: {
   b: {
     c: {
       dd: 'abcdd'
     }
   },
   d: {
     xx: 'adxx'
   },
   e: 'ae'
  }
}

let res = flatternObj(entry)
console.log(res)


// 2.*********************逆向转变
// 将扁平的对象转为结构对象
function toObj (obj) {
  let res = {}
  for(let key in obj) {
    let keyArr = key.split('.')
    setObj(res, keyArr, obj[key])
  }
  return res
}

function setObj(res, keyArr, value) {
  let temp
  if(!res[keyArr[0]]) res[keyArr[0]] = {}
  temp =  res[keyArr[0]]
  for(let i = 1; i < keyArr.length; i++) {
    if(!temp[keyArr[i]]) {
      temp[keyArr[i]] = (i === keyArr.length - 1) ? value : {}
    }
    temp = temp[keyArr[i]]
  }
}

let res2 = { 'a.b.c.dd': 'abcdd', 'a.d.xx': 'adxx', 'a.e': 'ae' }
console.log(toObj(res2))