function instance(A,B) {
  // A.__proto__ === B.prototype
  let left = A.__proto__
  let right = B.prototype
  while(true) {
    if(left === null) return false
    if(left === right) return true
    left = left.__proto__
  }
}