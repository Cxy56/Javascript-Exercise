
// 判断字符串 a 是否被包含在字符串 b 中
// !! 方法1, 遍历
function isContain(a, b) {
  for(let i in b) {
    if(b[i] === a[0]) {
      temp = true
      for(let j in a) {
        if(a[j] !== b[+i + (+j)]) {
          temp = false
        }
      }
      if(temp === true) return i
    }
  }
  return -1

}

// !!方法2,使用kmp算法
//******* leetcode 28题， 使用kmp算法匹配
function kmp(source, pattern) {
  // 边界条件
  if(needle.length === 0) return 0
  if(haystack.length === 0) return -1
  // 1. 计算table
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
  console.log(table)
  // 2. 字符匹配
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

// 测试
let res = kmp('aabaabaaa', 'aabaaa')
let res1 = kmp('hello', 'll')
let res2 = kmp('', '')
let res3 = kmp('a', 'a')
console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)