// 旋转矩阵
var rotate = function(matrix) {
  let len = matrix.length
  for(let i = 0; i < len; i++) {
      for(let j = i + 1; j < len; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      }
  }
  matrix.forEach(item => item.reverse())
  console.log(matrix)
  return matrix
};
let matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
rotate(matrix)

// !!编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let row0 = new Set(), col0 = new Set() // 所有存在0元素的行和列
  let m = matrix.length
  if(m === 0 ) return
  let n = matrix[0].length
  for(let i = 0; i < m; i++) {
      for(let j = 0 ; j < n ; j ++) {
          if(matrix[i][j] === 0) {
              row0.add(i)
              col0.add(j)
          }
      }
  }
  // 设置行0
  for(let row of row0) {
      for(let col1 = 0; col1 < matrix[row].length; col1++) {
          matrix[row][col1] = 0
      }
  }
  // 设置列0
  for(let col of col0) {
      for(let row1 = 0; row1 < matrix.length; row1++) {
          matrix[row1][col] = 0
      }
  }
};


var addStrings = function(num1, num2) {
  let flag = 0, len1 = num1.length - 1, len2 = num2.length - 1
  let res = ''
  while(len1 >= 0 || len2 >= 0 || flag) {
      let s1 = +num1[len1--] || 0
      let s2 = +num2[len2--] || 0
      let sum = flag + s1 + s2
      console.log('sum', sum)
      console.log('s1', s1)
      console.log('s2', s2)
      if(sum >= 10) {
        flag = 1
      } else {
        flag = 0
      }
      res = (sum % 10) + res
  }
  console.log('addStrings', res)
  return res
};

addStrings('10', '9')


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