
function findCommon (str){
  if(str.length === 0 || str === null) return ''
  let start = str[0]
  for(let i = 1; i < str.length; i++) {
    for(var j = 0; j < start.length; j++) {
      // str[i].charAt(j) !== start.charAt(j)
      if(str[i][j] !== start[j]) break
    }
    start = str[i].slice(0, j)
    console.log('start', start)
  }
  console.log('finnal', start)
}
let a1 = ["flower","flow","flight"]
let a2 = ["dog","racecar","car"]

// findCommon(a1)
// findCommon(a2)

// !!方法二
// 找出最长的和最短的两个字符串，比较, ==== y有问题，"flower","flow","flight"，  "flower","flight"
var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) return "";
  if(strs.length === 1) return strs[0]
  let min = 0, max = 0
  for(let i = 1; i < strs.length; i++) {
      if(strs[min] > strs[i]) min = i
      if(strs[max] < strs[i]) max = i
  }
  for(let j = 0; j < strs[min].length; j++) {
      if(strs[min].charAt(j) !== strs[max].charAt(j)) {
          return strs[min].substring(0, j)
      }
  }
  return strs[min]
};
// !!归并法
//!!分解成多个相似的子问题：求两个字符串的最长公共前缀
var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) return "";
  return lCPrefixRec(strs)
};

function lCPrefixRec(str) {
  let len = str.length
  if(len === 1) return str[0]
  let midIndex = Math.floor(len / 2)
  let left = str.slice(0, midIndex)
  let right = str.slice(midIndex)
  return findCommonTwo(lCPrefixRec(left), lCPrefixRec(right))
}
function findCommonTwo (str1, str2) {
  for(var i = 0; i < str1.length && i < str2.length; i++) {
    if(str1.charAt(i) !== str2.charAt(i)) {
      break
    }
  }
  return str1.substring(0, i)
}

console.log(longestCommonPrefix(a1))
console.log(longestCommonPrefix(a2))

//!! 给定一个字符串，逐个翻转字符串中的每个单词。
var reverseWords = function(s) {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
};

console.log('reverseWords', reverseWords('  hello world!  '))