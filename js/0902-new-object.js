function newObj() {
  let obj = new Object()
  let constructor = [].shift.call(arguments)
  obj.__proto__ = constructor.prototype
  let res = constructor.apply(obj, arguments)
  return typeof res === 'object' ? res : obj
}

// Object.create 的基本实现原理
function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}


// Object() 与 new Object() 的区别
var obj  = Object({ name:"tcc"});//与加new等效
console.log(obj instanceof Object);//true
console.log(obj.name);//tcc
console.log(obj instanceof String);//false


var ostr = Object("tcc");//Object构造函数也会像工厂方法一样，根据传入的值的类型返回相应的基本包装类型的实例
ostr.age = 18;
console.log(ostr instanceof String);//true
console.log(ostr instanceof Object);//true
console.log(typeof ostr);//object

var str = String("tcc");//这是转型函数，其它的还有Nmber()、 Boolean()、 Array()
var str = new String("tcc");//这是才是引用类型