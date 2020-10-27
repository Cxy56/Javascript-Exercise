
// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// !!方法一，使用api
var firstUniqChar = function(s) {
  let len = s.length
  for(let i = 0; i < len; i++) {
      let cur = s[i]
      if(s.indexOf(cur) === s.lastIndexOf(cur)) {
          return cur
      }
  }
  return " "
};

//!! 方法二，利用map结构存储出现次数
var firstUniqChar = function(s) {
  let len = s.length
  if(len === 0) return " "
  let objMap = new Map()
  for(let i = 0; i < len; i++) {
      let cur = s[i]
      if(objMap.has(cur)) {
        let count = objMap.get(cur)
        objMap.set(cur, ++count)
      } else {
        objMap.set(cur, 1)
      }
  }
  for(let [key,value] of objMap) {
    if(value === 1) return key
  }
};

console.log(firstUniqChar("abaccdeff"))