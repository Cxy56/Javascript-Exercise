
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let len = s.length
  let res = '', cur = ''
  for(let i = len - 1; i >= 0; i--) {
     if(s[i] !== ' ') {
         cur = s[i] + cur
     } else {
       if(cur === '') {
         continue
       }
      if(res !== '') {
          res = res + ' ' + cur
      } else {
          res = cur
      }
      cur = ''
     }
  }
  if(cur !== '') {
      res = res + ' ' + cur
  }
  console.log(res)
  return res

};

reverseWords("  hello world!  ")