function maxStr0(str) {
  let num = 1;
  let char = str.slice(0,1);

  // 使其按照一定的次序排列
  str = str.split('').sort().join('');
  // "aaabbbbbcccccccc"

  // 定义正则表达式, 字符串最多的
  let re = /(\w)\1+/g;
  str.replace(re,($0,$1) => {
    console.log('replace', $0)
      if(num < $0.length){
          num = $0.length;
          char = $1;        
      }
  });
  console.log(`字符最多的是${char}，出现了${num}次`);
}
maxStr0('abcd')
maxStr0('abacd')

// 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false

function containsRepeatingLetter(str) {
  let a = false
  let reg = /([a-zA-Z])\1/g
  str.replace(reg, ($0,$1) =>{
    console.log($0)
    if($0) {
      a = true
    }
  })
  return a
}

let res1 = containsRepeatingLetter('ratttler')
console.log(res1)

let res2 = containsRepeatingLetter('qwSe')
console.log(res2)

let res3 = containsRepeatingLetter('qwSe11')
console.log(res3)