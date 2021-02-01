// 给定字符串 str，检查其是否以元音字母结尾
// 1、元音字母包括 a，e，i，o，u，以及对应的大写
// 2、包含返回 true，否则返回 false

function endsWithVowel(str) {
  var reg = /[a || e || i ||o || u]$/i
  console.log(reg.test(str))

}
// endsWithVowel('gorilla')
// endsWithVowel('gorillbe') 


function matchesPattern(str) {

  var reg = /^(\d{3}-){2}[0-9]{4}$/
  console.log(reg.test(str))

}
matchesPattern('800-555-1212')