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
