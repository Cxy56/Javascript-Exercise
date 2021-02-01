/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-07-01 22:25:29
 * @LastEditTime: 2020-07-01 22:27:27
 * @LastEditors:  
 */
// !!实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据 
let normalize = str => {
  let result = {}
  let c
  
  // 字符串转化为数组
  let arr = str.split(/[\[\]]/g).filter(Boolean)

  console.log(arr)
  
  // 生成结构化数据
  arr.forEach((item, index) => {
    if(index != 0) {
      c.children = {}
      c.children.value = item
      c= c.children
    } else {
      result.value = item
      c= result
    }
  })
  console.log(result)
  return result
}
let str = '[abc[bcd[def]]]'
normalize(str)
normalize('aaa')
normalize('aaa[cd]')