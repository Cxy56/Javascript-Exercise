// 第一个不重复字符
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