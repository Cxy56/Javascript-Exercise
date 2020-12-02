// 题目描述
// 根据包名，在指定空间中创建对象
// 输入描述:
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出描述:
// {a: {test: 1, b: {c: {d: {}}}}}

function namespace(origin, package) {
  let arr = package.split('.')
  let res = origin
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] in origin) {
      if (typeof origin[arr[i]] !== 'object') {
        origin[arr[i]] = {}
      }
    } else {
      origin[arr[i]] = {}
    }
    origin = origin[arr[i]]
  }
  console.log('res', res)
  return res
}