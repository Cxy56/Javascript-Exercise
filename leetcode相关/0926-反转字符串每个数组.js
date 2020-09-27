//!! 给定一个字符串，逐个翻转字符串中的每个单词。
var reverseWords = function(s) {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
};

console.log('reverseWords', reverseWords('  hello world!     aaaa  '))

// 采用双端队列