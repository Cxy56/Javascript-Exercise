// 找出次数
function findMax(str) {
  let len = str.length
  let max = 0, count = 1
  for(let i = 0 ; i < len; i++) {
    if(str[i] === str[i + 1]) {
      count++
    } else {
      count = 1
    }
    max = Math.max(count, max)
  }
  console.log(max)
  return max
}

// 找出字符和次数
function findMaxStr(str) {
  let len = str.length
  let res = {
    value: 0,
    key: ''
  }
  for(let i = 0; i < len; i++) {
    let j = i
    while(str[j] === str[j+1]) {
      j++
    }
    let max =  j - i + 1
    console.log('max', max)
    console.log('i', i)
    console.log('i=j', j)
    if(max > res.value) {
      res.value = max
      res.key = str[i]
    }
    i = j // 跳过已经执行的重复字符
  }
  console.log(res)
  return res
}
findMaxStr('aaaffffa')