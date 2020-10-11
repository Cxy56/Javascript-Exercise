// 柯里化
// 使用柯里化函数，离不开闭包， arguments， 递归。
// todo 将函数的参数，变为一个个传入

// !! ******1. 固定传入参数，参数够了才执行
function curry(fn, args) {
  var len = fn.length
  var args = args || []
  return function()  {
    var _args = [].slice.call(arguments)
    let newArgs = args.concat(_args)
    if(newArgs.length >= len) {
      return fn.apply(this, newArgs)
    } else {
      return curry.call(this, fn, newArgs)
    }
  }
}

// !! ******2. 不固定传入参数，随时执行
function curry2(fn) {
  let args = [].slice.call(arguments)
  return function re_curry() {
    if(arguments.length === 0) {
      return fn.apply(null, args)
    } else {
      let _args = [].slice.call(arguments)
      args = args.concat(_args)
      return function() {
        let inner = [].slice.call(arguments)
        return re_curry.apply(null, inner)
      }
    }
  }
}