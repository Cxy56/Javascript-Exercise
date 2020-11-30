//!!转换为二维数组
// 抽象为通式：
// dp[i][j] ： 长度为 i ，以 A[i-1] 为末尾的序列，和长度为 j，以 B[j-1] 为末尾的序列，二者的最大公共后缀序列长度（该公共序列以A[i-1]（B[j-1]）为末尾项）
// 如果 A[i-1] != B[j-1] ， dp[i][j] = 0
// 如果 A[i-1] == B[j-1] ， dp[i][j] = dp[i-1][j-1] + 1

function findCommonLength (A, B) {
  const m = A.length
  const n = B.length

  let dp = new Array(m + 1)
  for(let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  let res = 0
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if (A[i - 1] == B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      res = Math.max(dp[i][j], res)
    }
  }
  console.log('dp', dp)
  console.log('findCommonLength', res)
  return res
}

findCommonLength([1,2,3,2,1], [3,1,0,4,7])
