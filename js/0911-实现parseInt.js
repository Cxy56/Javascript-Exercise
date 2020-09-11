// parseInt接受参数
/**
 * @param str
 * @param radix,  number  2- 36， 
 */
function _parseInt(str, radix) {
  let str_type = typeof str;
  let res = 0;
  if (str_type !== 'string' && str_type !== 'number') {
    // 如果类型不是 string 或 number 类型返回NaN
    return NaN
  }

  str = String(str).trim().split('.')[0]
  let len = str.length
  if(!len) return NaN
  if(!radix) {
    radix = 10
  }
  if(typeof radix !== 'number'  || radix < 2 || radix > 36) {
    return NaN
  }
  let arr = str.split('').reverse();
  for(let i = 0; i < arr.length; i++) {
    res += Math.floor(arr[i]) * Math.pow(radix, i)
  }
  return res
}
console.log(parseInt('123.5', 10))
console.log(_parseInt('123.5', 10))