/**
  实现 strStr() 函数。

  给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

  示例 1:

  输入: haystack = "hello", needle = "ll"
  输出: 2
  示例 2:

  输入: haystack = "aaaaa", needle = "bba"
  输出: -1
*/
// !! KMP算法

function kmp(source, pattern) {
   // 边界条件
   if(pattern.length === 0) return 0
   if(source.length === 0) return -1
   //!! 1. 计算table
   let table = new Array(pattern.length).fill(0)
   console.log(pattern.length)
   {
     let i = 1, j = 0
     while(i < pattern.length) {
       if(pattern[i] === pattern[j]) {
         ++j,++i;
         table[i] = j
       } else {
         if(j > 0) {
           j = table[j]
         } else {
           i++
         }
       }
     }
   }
   console.log('table', table)

   //!! 2. 字符匹配
   {
    let i = 0, j = 0, start = 0
    while(i < source.length) {
      if(pattern[j] === source[i]) {
        i++
        j++
      } else {
        if(j > 0){
          j = table[j]
          start = i - j
        }
        else {
          i++
          start = i
        }
      }
      if(j === pattern.length) return start
    }
    return -1
  }
}