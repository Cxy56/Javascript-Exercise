/*
!!思路概括
一层层向里处理，按顺时针依次遍历：上、右、下、左层
不再形成“环”了，就会剩下一行或一列，然后单独判断
!!4 个边界
上边界 top : 0
下边界 bottom : matrix.length - 1
左边界 left : 0
右边界 right : matrix[0].length - 1

矩阵不一定是方阵
top < bottom && left < right 是循环的条件
无法构成“环”了，就退出循环，分 3 种情况：
top == bottom && left < right —— 剩一行
top < bottom && left == right —— 剩一列
top == bottom && left == right —— 剩一项（也是一行/列）

!!处理剩下的单行或单列
因为是按顺时针推入结果数组的，所以
剩下的一行，从左至右 依次推入结果数组
剩下的一列，从上至下 依次推入结果数组
*/

function orderMatrix (matrix) {
  if(matrix.length === 0) return []
  let top = 0, left = 0
  let right = matrix[0].length - 1, bottom = matrix.length - 1
  let res = []
  while(top < bottom && left < right) {
    for(let i = left; i < right; i++) {
      res.push(matrix[top][i])
    }
    for(let i = top; i < bottom; i++) {
      res.push(matrix[i][right])
    }

    for(let i = right; i > left; i--) {
      res.push(matrix[bottom][i])
    }

    for(let i = bottom; i > top; i--) {
      res.push(matrix[i][left])
    }
    top++
    bottom--
    left++
    right--
  }
  if (top === bottom) {
    for(let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
  } else if (left === right) {
    for(let i = top; i <= bottom; i++) {
      res.push(matrix[i][left])
    }
  }
  console.log('res', res)
  return res
}

let matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
let matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
orderMatrix(matrix1)
orderMatrix(matrix2)
