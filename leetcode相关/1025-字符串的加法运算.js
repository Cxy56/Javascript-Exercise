// 返回的仍是字符串
var addStrings = function(num1, num2) {
  let flag = 0, len1 = num1.length - 1, len2 = num2.length - 1
  let res = ''
  while(len1 >= 0 || len2 >= 0 || flag) {
      let s1 = +num1[len1--] || 0
      let s2 = +num2[len2--] || 0
      let sum = flag + s1 + s2
      console.log('sum', sum)
      console.log('s1', s1)
      console.log('s2', s2)
      if(sum >= 10) {
        flag = 1
      } else {
        flag = 0
      }
      res = (sum % 10) + res
  }
  console.log('addStrings', res)
  return res
};

addStrings('10', '9')
