function parent() {
  this.a = 'hello'
  this.b = 'haha'
}

parent.prototype.sayHi = function () {
  console.log(`${this.a} + ${this.b}`)
}

function child () {
  this.name = 'child'
}

child.prototype = new parent()

let obj = new child()

obj.sayHi()