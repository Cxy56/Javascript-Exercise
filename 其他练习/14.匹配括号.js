// 利用栈，记录括号
let mapChar = {
  '[': ']',
  '{': '}',
  '(': ')'
}
let mapCharEnd = {
  ']': '[',
  '}': '{',
  ')': '('
}

function isValid(str) {
  let stack = []
  for(let i = 0; i < str.length; i++) {
    if(mapChar[str[i]]){
      stack.push(str[i])
      console.log('stack', stack)
    } else if(mapCharEnd[str[i]]){
      if(str[i] !== mapChar[stack.pop()]) {
        return false
      }
    }
  }
  return stack.length === 0
}

// 时间复杂度：O(n)

// 空间复杂度：O(n)

let str1 = '()[]{}'
let str2 = 'ab{c}d{}[]('
let str3 =  '([)]'

console.log(isValid(str1))
console.log(isValid(str2))
console.log(isValid(str3))