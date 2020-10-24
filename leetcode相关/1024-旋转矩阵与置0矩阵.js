// 旋转矩阵： 
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
let martix = [
  [1,0,1],
  [1,1,1], 
  [1,1,0]
]
setZeroes(martix)

console.log('martix', martix)