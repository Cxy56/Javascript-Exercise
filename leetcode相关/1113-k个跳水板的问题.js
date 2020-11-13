/**
 * 
 *你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。
 *你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
 *返回的长度需要从小到大排列。
 */

 // 1. 循环

 function divingMethod1 (shorter, longer, k) {
   if(k === 0) return []
   if(shorter === longer) return [ k * shorter]
   let result = []
   let short = Math.min(shorter, longer)
   let long = Math.max(shorter, longer)
   for(let i = 0; i <= k; i++) {
    result.push(long * i + (k - i) * short)
   }
   return result
 }

 // 2. 递归

 function divingMethod2 (shorter, longer, k) {
  if(k === 0) return []
  if(shorter === longer) return [ k * shorter]
  let result = []
  let short = Math.min(shorter, longer)
  let long = Math.max(shorter, longer)
  var dns = function (short, long, k, i, res){
    if(i > k) return res
    res.push(short*(k-i) + long * i)
    return dns(short, long, k, i+1, res)
  }
  return dns(short, long, k, 0, [])
}


