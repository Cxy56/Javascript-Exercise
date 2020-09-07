// 斐波那契数列

function fib(n) {
  if(n <= 2) return 1
  return fib(n - 2) + fib(n - 1)
}

// 公园里有一些桃子，猴子每天吃掉一半以后扔掉一个，第6天的时候发现还剩下1个桃子，问开始有几个桃子？
function peach(n) {
  if(n > 6) return 0
  if(n === 6) return 1
  // 第n天的
  var sum = (peach(n + 1) + 1) * 2
  return sum
}

console.log(peach(5))

// 第一天给你一分钱，以后每天翻倍
//**************** 1. 普通函数的形式
function total(start, n) {
  let sum = 0
  for(let i = 0; i <= n; i++) {
    sum += start * Math.pow(2, i-1)
  }
  console.log(sum)
  return sum
}
console.log(`total`, total(0.01, 30))

//**************** 2. 递归
var start = 0.01

function sumRes(num,sum) {
  if (num < 1) return sum;
  return sumRes(num-1, Math.pow(2, num-1)* start + sum)
}

console.log(`sumRes`, sumRes(30, 0))


