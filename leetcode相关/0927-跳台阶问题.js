// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
// !! 例子一 
// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// !! 例子二
// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶
// !!cur = (pre1 + pre2)%1000000007  防止大数溢出，模1000000007是通用做法
// 1000000007是一个质数（素数），对质数取余能最大程度避免结果冲突/重复

// !! 1.同斐波那契数列
function jumpFloor1 (number) {
  if(number <= 2){
    return number;
  }
  return jumpFloor1(number - 1) + jumpFloor1(number - 2)
}

// !! 2. 动态规划
function jumpFloor2(number) {
  if(number <= 2){
    return number;
  }
  let pre2 = 1, pre1 = 2
  var cur
  for(let i = 3; i <= number; i++){
    cur = pre1 + pre2
    pre2 = pre1
    pre1 = cur
  }
  return cur
}

console.log('jumpFloor1', jumpFloor1(2))
console.log('jumpFloor2', jumpFloor2(2))

console.log('jumpFloor1', jumpFloor1(3))
console.log('jumpFloor2', jumpFloor2(3))

console.log('jumpFloor1', jumpFloor1(8))
console.log('jumpFloor2', jumpFloor2(8))

// !! 升级版， 返回所有路线结果
function jumpFloorArr(number) {
  let pre2 = [[1]], pre1 = [[1, 1], [2]]
  if(number === 1){
    return pre2;
  }
  if(number === 2){
    return pre1;
  }
  for(let i = 3; i <= number; i++){
    let res = []
    pre2.forEach(item => {
      res.push(item.concat([2]))
    })
    pre1.forEach(item => {
      res.push(item.concat([1]))
    })

    pre2 = pre1
    pre1 = res
  }
  return pre1
}

console.log(jumpFloorArr(3))
console.log('jumpFloor2', jumpFloor2(4))
console.log(jumpFloorArr(4))