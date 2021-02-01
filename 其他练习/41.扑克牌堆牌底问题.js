/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-06-29 19:55:06
 * @LastEditTime: 2020-07-10 11:03:33
 * @LastEditors:  
 */

/*有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；
最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；
问：原来那堆牌的顺序，用函数实现。
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function sortPoke(arr) {
  let _arr = []
  while (arr.length > 0) {
    // 选择抽取哪张牌
    if (arr.length % 2 == 1) {
      _arr.push(arr.pop())
    } else {
      _arr.push(arr.shift())
    }
  }

  return _arr.reverse()
}

console.log(sortPoke([...arr]))
// [7, 6, 8, 5, 9, 4, 10, 3, 11, 2, 12, 1, 13]

function sortPoke2(arr) {
  let _arr = []
  while (arr.length > 0) {
    // 选择抽取哪张牌
    if (arr.length % 2 == 1) {
      _arr.unshift(arr.pop())
    } else {
      _arr.unshift(arr.shift())
    }
  }
  return _arr
}

console.log(sortPoke2([...arr]))
