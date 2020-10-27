/**
  * 
  * @param {
  * 给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。

    如果剩余字符少于 k 个，则将剩余字符全部反转。
    如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

  * @param {*} k 
  */
 // 每隔2k步，跳
 var reverseStr = function(s, k) {
  let arr = s.split('')
  console.log(arr.length)
  let len = arr.length
  for(let i = 0; i < len; i += 2*k) {
      let m = i
      let n = Math.min(i + k - 1, len - 1)
      while(m < n) {
        [arr[m], arr[n]] = [arr[n], arr[m]]
        m++
        n--
      }
  }
  console.log(arr.join(''))
  return arr.join('')
};

reverseStr('abcdefghij', 2)   // bacdfeghji


var reverseOnlyLetters = function(S) {
  let arr = S.split('')
  let i = 0, j = arr.length - 1
  while(i < j) {
    if(!isASCIIcode(S.charCodeAt(i))) i++
    else if(!isASCIIcode(S.charCodeAt(j))) j--
    else {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  return arr.join('')

};
function isASCIIcode(code) {
  console.log('code', code)
  return code >= 65 && code <= 90 ||  code >= 97 && code <= 122
}

console.log(reverseOnlyLetters("7_28]"))
