let setTimeoutFunc = (func, time) => {
  let start = new Date().getTime()
  let flag = true
  while(flag) {
    let end = new Date().getTime()
    if(end - start >= time) {
      flag = false
    }
  }
  func()
}
console.log('world')
setTimeoutFunc(() => {
  console.log('hello')
}, 1000)

// **************** 题目
// 2020-06-08
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}
// 1s后同时输出
// function test() {
//   list.forEach(async x=> {
//     const res = await square(x)
//     console.log(res)
//   })
// }

// 每隔1s输出一个
async function test() {
  for(let i = 0 ; i < list.length; i++) {
    const res = await square(list[i])
    console.log(res)
  }
}

test()

