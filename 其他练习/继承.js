// es6
class A {
  constructor() {}
}
class B extends A  {
  constructor(){
    super()
  }
}

function Parent() {
}
Parent.prototype.getName = function () {}

function Child() {
  Parent.call(this)
}
Child.prototype = new Parent()


// es5
function Parent(name) {
  this.parent = name
}
Parent.prototype.say = function() {
  console.log(`${this.parent}: 你打篮球的样子像kunkun`)
}

function Child(name, parent) {
  // 将父类的构造函数绑定在子类上
  Parent.call(this, parent)
  this.child = name
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.say = function() {
    console.log(`${this.parent}好，我是练习时长两年半的${this.child}`);
}

//!! 注意记得把子类的构造指向子类本身
Child.prototype.constructor = Child;