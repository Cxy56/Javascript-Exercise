// *************1. call 的实现
Function.prototype.call_2 = function(context) {
  context = context || window
  context.fn = this
  let args = [].slice.call(arguments, 1)
  let result = context.fn(...args)
  delete context.fn
  return result
}

// 测试用例
function fn () {
  console.log(this.name)
  console.log(arguments)
}
fn()
var o = {
  name: 'chen'
}
var a = fn.call_2(o, 1, 2)

// *************2. apply 的实现
Function.prototype.apply2 = function(context) {
  context = context || window
  context.fn = this
  let result
  if(arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

// 测试用例
function fn () {
  console.log(this.name)
  console.log(arguments)
}
fn()
var o = {
  name: 'chen'
}
var a = fn.apply2(o, [1,2])

//************* 3. bind的实现

Function.prototype.bind2 = function(context) {
  var self = this
  var args = [].slice.call(arguments, 1)
  function fNoop() {}
  fNoop.prototype = this.prototype
  function fbound () {
    let _args = [].slice.call(arguments)
    self.apply(context, args.concat(_args))
  }
  fbound.prototype = new fNoop()
  
  return fbound
}

// 测试用例
function fn () {
  console.log(this.name)
  console.log(arguments)
}
fn()
var o = {
  name: 'chen'
}
var a = fn.bind2(o)
a()