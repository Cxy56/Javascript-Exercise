/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-06-22 13:16:41
 * @LastEditTime: 2020-06-22 13:26:14
 * @LastEditors:  
 */
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}
test()

// 如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法

async function test() {
  for(let i = 0; i < list.length; i++) {
    const res = await square(list[i])
    console.log(res)
  }
  for(let value of list) {
    const res2 = await square(value)
    console.log(res2)
  }
}