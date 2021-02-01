// 封装函数 f，使 f 的 this 指向指定的对象

function bindThis(f, target) {
  var args = Array.prototype.slice.call(arguments,2)
  return function () {
    var _args = Array.prototype.slice.call(arguments)
    return f.apply(target, args.concat(_args))
  }
}
