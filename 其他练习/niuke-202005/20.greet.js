// 完成函数 createModule，调用之后满足如下要求：
// 1、返回一个对象
// 2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
// 3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值
function createModule(str1, str2) {
  let obj = new Obj(str1, str2)
  return obj
}
class Obj {
  constructor(str1,str2) {
    this.greeting = str1
    this.name = str2
  }
  sayIt() {
    return this.greeting + ',' + this.name
  }
}

let a = createModule('q', 'n')
console.log(a.sayIt())


function createModule(str1, str2) {
  var obj = 
  {
    greeting : str1,
    name : str2,
    sayIt : function() {
      return this.greeting + ', '+ this.name
    }
  }
  return obj
}
