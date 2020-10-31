/*
示例 1:
输入: a = "11", b = "1"
输出: "100"
示例 2:
输入: a = "1010", b = "1011"
输出: "10101"
*/
var addBinary = function(a, b) {
  let len1 = a.length
  let len2 = b.length
  let temp = 0,sum = ''
  let i = len1-1
  let j = len2-1
  while(i >= 0 || j >= 0) {
    let cur1 = a[i] || 0
    let cur2 = b[j] || 0
    let res = (+cur1) + (+cur2) + temp
    sum = res % 2 + sum
    temp = Math.floor(res / 2)
    i--
    j--
  }
  let result = temp > 0 ? temp + sum : sum
  console.log(result)
  return result
};
addBinary('11', '1')
addBinary('1010', '1011')
addBinary('1011', '1')
addBinary('0', '0')