
function strLength(s, bUnicode255For1) {
  let len = s.length
  if(bUnicode255For1) return len
  for(let i = 0; i < len; i++){
      if(s.charCodeAt(i) > 255){
          len++
      }
  }
  return len
}

let res = strLength('hello world, 牛客', false)
console.log('res', res)
