// !! 1. 删除字符串中的所有相邻重复项  (两个相邻的相同删除)
// 重复项删除操作 会选择<<< 两个 >>>相邻且相同的字母，并删除它们。

// 输入："abbaca"
// 输出："ca"

var removeDuplicates = function(S) {
  let stack = [S[0]]
  for (let i = 1; i < S.length; i++) {
    if (S[i] === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(S[i])
    }
  }
  return stack.join('')
};

// !!利用栈结构
function deleteDulpStr(s) {
  let stack = []
  for(let c of s) {
    let pre = stack.pop()
    if(pre !== c) {
      stack.push(pre)
      stack.push(c)
    }
  }
  return stack.join('')
}
console.log(deleteDulpStr("abbaca"))

// !! 2.从 s 中选择 k 个相邻且相等的字母，并删除它们

// 输入：s = "deeedbbcccbdaa", k = 3
// 输出："aa"

var removeDuplicates2 = function(s, k) {
  let stack = [];
  for(let _s of s){
    const last = stack.pop();  // 弹出栈顶元素
    console.log('last', last)
    if(!last || last[0] !== _s){ // 
        stack.push(last)
        stack.push(_s)
    }else if(last.length < k-1){
        stack.push(last + _s)
    }
  }

  return stack.join('')
};
console.log('removeDuplicates2========', removeDuplicates2('deeedbbcccbdaa', 3))

// !! 3. 删除字符串中出现次数 >= 2 次的相邻字符
/**
 * 删除字符串中出现次数 >= 2 次的相邻字符
 * @param {string}s
 */
function removeDuplicate3(s) {
  const stack = [] // Space: O(n)
  let top
  let next
  let i = 0
  while (i < s.length) { // Time: O(n)
    top = stack[stack.length - 1]
    next = s[i]
    if (next === top) {
      // 字符串中出现了相邻字符
      // 1. 移除栈顶字符
      // 2. 移动指针, 指向下一个不同的字符
      stack.pop()
      while (s[i] === top) i += 1
    } else {
      stack.push(next)
      i += 1
    }
  }

  return stack.join('')  // Time: O(n)
}

console.log(removeDuplicate3('abbbaca'))

var removeDuplicates4 = function(s, k = 2) {
  let stock = []
  for (let i = 0; i < s.length; i++) {
    let prev = stock.pop()
      if (!prev || prev[0] !== s[i]) { // 取第一个字符比较
        stock.push(prev)
        stock.push(s[i])
      } else if(prev.length < k-1 || prev[0] === s[i+1]) { // 如果长度达不到删除数量 或者与下一个字符相同则继续累加
          stock.push(prev+s[i]) // 相同字符拼接在一起
      }
  }
  return stock.join('')
};

console.log('removeDuplicates4', removeDuplicates4('abbbaca'))

