
// 获取数字 num 二进制形式第 bit 位的值。注意：
// 1、bit 从 1 开始
// 2、返回 0 或 1
// 3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1
function valueAtBit(num, bit) {
  let num2 = convent(num)
  console.log(num2.length)
  let res = num2.substr(num2.length-bit, 1)
  console.log(res)
  return res
  
}
function convent(n) {
let array = [];
while (n > 0) {
  array.push(n % 2);
  n = parseInt(n / 2);
}
let res = array.length === 0 ? '0' : array.reverse().join("");
return res;
}

valueAtBit(128,8)