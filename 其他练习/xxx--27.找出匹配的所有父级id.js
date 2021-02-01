/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-06-21 15:15:31
 * @LastEditTime: 2020-06-21 15:19:57
 * @LastEditors:  
 */
/*
const value = '112'
const fn = (value) => {
...
}
fn(value) // 输出 [1， 11， 112]
*/
const findItem = (value, list, graph) => {
  return list.some(item => {
      if (item.id === value) {
          graph.push(item.id)
          return true
      }
      if (item.children) {
          graph.push(item.id)
          return findItem(value, item.children, graph)
      }
  })
}

const fn = value => {
  let graph = []
  list.some(item => {
      graph.push(item.id)
      if (item.id === value) return true
      if (item.children) {
          let res = findItem(value, item.children, graph)
          if (!res) graph = []
          return res
      }
  })
  return graph
}
let value = '112'
let res = fn(value)
console.log(res)