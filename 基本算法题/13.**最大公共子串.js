 
//  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

//  输入: "abcabcbb"
//  输出: 3 
//  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


//  输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

 // !!解法1 ，维护数组

 function findSubStr(str) {
   let max = 0, arr = []
   for(let i = 0; i < str.length; i++) {
     let cur = str.charAt(i)
     let index = arr.indexOf(cur)
     if(index > -1) {
      arr.splice(0, index + 1)
     }
      arr.push(cur)
      max = Math.max(max, arr.length)
   }
   return max
 }
//  时间复杂度：O(n2)， 
// 其中 arr.indexOf() 时间复杂度为 O(n) ，
// arr.splice(0, index+1) 的时间复杂度也为 O(n)
//空间复杂度：O(n)

 console.log('findSubStr', findSubStr('abcabcbb'))
 console.log('findSubStr', findSubStr('pwwkew'))
 console.log('findSubStr', findSubStr('bbbbb'))

 //!!方法2, 维护下标,  使用下标来维护滑动窗口

 function subStrLen(str) {
  let index = 0, max = 0
  for(let i = 0, j = 0; j < str.length; j++) {
    index = str.substring(i,j).indexOf(str[j])
    if(index !== -1) {
      i = i + index + 1
    }
    max = Math.max(max, j - i + 1)
  }
 }

// 时间复杂度：O(n2)
// 空间复杂度：O(n)

// !! 方法3，利用map， 存放key 为字符，value 为下标

var lengthOfLongestSubstring = function(s) {
  let map = new Map(), max = 0
  for(let i = 0, j = 0; j < s.length; j++) {
      if(map.has(s[j])) {
          i = Math.max(map.get(s[j]) + 1, i)
      }
      max = Math.max(max, j - i + 1)
      map.set(s[j], j)
  }
  return max
};