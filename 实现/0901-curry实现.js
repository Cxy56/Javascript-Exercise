
// 1. 实现柯里化
function curry(fn, args){
  var len = fn.length
  args = args || []
  return function() {
    var _args = [].slice.call(arguments)
    let newArgs = args.concat(_args)
    if(newArgs.length >= len) {
      return fn.apply(this, newArgs)
    } else {
      return curry.call(this, fn, newArgs)
    }
  }
}
// 测试例子1：
function add(num1,num2, num3) {
  return num1 + num2 + num3
}
let curryAdd = curry(add)(2)
console.log(curryAdd(7))
console.log(curryAdd(7)(3))
console.log(curryAdd(2,3,5))
// var add1 = x => (y => x + y);
// console.log(add1(1)(2))

// 2. --实现一个函数sum，运算结果可以满足如下预期结果：
/* 
sum(1,2,3);       //6
sum(2,3)(2);      //7
sum(1)(2)(3)(4);  //10
sum(2)(4,1)(2);   //9
*/
function sum() {
  var cur = Array.prototype.slice.call(arguments).reduce(function(a,b){return a + b}, 0)
  function innerSum() {
    var next = Array.prototype.slice.call(arguments).reduce(function(a,b){return a + b}, 0)
    cur += next
    return innerSum
  }
  innerSum.toString = function () {
    return cur
  }
  innerSum.valueOf = function(){
    return cur;
  }
  return innerSum
}
let res = sum(10)
console.log('-----', res(1,2,3))
console.log('-----', sum(2,3)(2))
console.log('-----', sum(1)(2)(3)(4))
console.log('-----', sum(2)(4,1)(2))

// 3. 对函数参数改造
function sumNum() {
  var args = [].slice.call(arguments)
  return args.reduce(function(a,b) {
    return a + b
  }, 0)
}
function sumAll(fn) {
  var args = [].slice.call(arguments, 1)
  var cur = fn.apply(null, args)

  function innerSum() {
    var _args = [].slice.call(arguments)
    var next = fn.apply(null, _args)
    cur += next
    return innerSum
  }
  innerSum.toString = function () {
    return cur
  }
  innerSum.valueOf = function () {
    return cur
  }

  return innerSum
}
let sumA = sumAll(sumNum)
console.log('aaaa', sumA(1,2,3))
console.log('aaaa', sumA(2,3)(2))
console.log(`aaaa`, sumA(1)(2)(3)(4))
console.log('aum', sumA(2)(4,1)(2))
