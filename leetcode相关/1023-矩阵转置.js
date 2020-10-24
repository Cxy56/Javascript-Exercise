// !!矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
var transpose = function(A) {
  var arr = []
  var rows = A.length
  if (rows.length === 0) return arr
  var cols = A[0].length
  for (var i = 0; i < cols; i++) {
      arr[i] = []
      for (var j = 0; j < rows; j++) {
          arr[i][j] = A[j][i]
      }
  }
  console.log('arr', arr)
  return arr
};
let A = [[1,2,3], [4,5,6]]
transpose(A)