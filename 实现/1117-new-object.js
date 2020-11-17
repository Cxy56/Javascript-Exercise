function newObj() {
  let obj = Object.create(null)
  let constructor = [].shift.call(arguments)
  obj.__proto__ = constructor.prototype
  let res = constructor.apply(obj, arguments)

  return typeof res === 'object' ? res : obj
}