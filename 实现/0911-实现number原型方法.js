// 实现 (5).add(3).minus(2) 功能
// 8.add，是因为数值后面的点，会被解释为小数点，而不是点运算符。
// 将数值放在圆括号中，数字就会自动转化为基本包装类型，就可以使用点运算符调用方法了。
Number.prototype.add = function(num) {
  if(typeof num !== 'number') return
  return this.valueOf() + num
}

Number.prototype.minus = function(num) {
  if(typeof num !== 'number') return
  return this.valueOf() - num
}

console.log((5).add(3).minus(2))


class MyNumber extends Number {
  constructor(e) {
    super(e);
  }
  add(n=0) {
    if(typeof n !== "number") {
      throw new Error("Please enter the correct data type")
    }
    return new MyNumber(this+n);
  }
  minus(n=0) {
    if(typeof n !== "number") {
      throw new Error("Please enter the correct data type")
    }
    return new MyNumber(this-n);
  }
}
var a = new MyNumber (10);
console.log(a.minus(-1).add(2))