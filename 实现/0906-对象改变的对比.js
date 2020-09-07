 // 获取两个对象中发生改成的值，形成一个新的对象格式如下：
const oldData = {
  a: 1,
  b: 2,
  c: [{ aa: 2 }, { bb: 4 }],
};
const newData = {
  a: 2, // a值发生改变
  b: 2,
  c: [
    {
      aa: 4, // aa 值发生改变
    },
    { bb: 4 },
  ],
};

const obj = {
  a: {
    val: 2,
    change: true,
  },
  b: {
    val: 2,
  },
  c: [{ aa: { val: 4, change: true } }, { bb: { val: 4 } }],
}

function compareData(objA,objB) {
  let result = {}
  for(let key in objB) {
    let cur = objB[key]
    if(typeof cur === 'object') {
      if(cur instanceof Array) {
        result[key] = []
        for(let i = 0; i < cur.length; i++) {
          result[key][i] = compareData(objA[key][i], objB[key][i])
        }
      } else {
        result[key] = compareData(objA[key], objB[key])
      }

    } else {
      result[key] = {
        val: objB[key]
      }
      if(objB[key] !== objA[key]) {
        result[key].change = true
      }
    }
  }

  return result
}

console.log(compareData(oldData, newData))