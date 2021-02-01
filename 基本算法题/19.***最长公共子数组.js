/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-07-01 11:43:43
 * @LastEditTime: 2020-07-01 22:24:23
 * @LastEditors:  
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// !!只能是不重复的元素--------考虑错误，重复的元素不适用***
var findLength = function(A, B) {
  let lenA = A.length
  let i = 0, resTotal = 0
  while(i < lenA) {
      let j = start = B.indexOf(A[i])
      console.log(start)
      console.log(j)
      if(j === -1) {
          i++
          continue
      }
      while(A[i + 1] === B [j + 1] && i + 1 < lenA) {
          i++
          j++
      }
      i++
      
      resTotal = Math.max(resTotal, j-start + 1)
  }
  console.log('resTotal', resTotal)
  return resTotal
};
findLength([1,2,3,2,1], [3,2,1,4,7])

findLength([1,2,3], [4,7])
findLength([0,0,0,0], [0,0,0,0])
findLength([0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,1,0,0])

//!!正解！！！转换为二维数组
// 抽象为通式：
// dp[i][j] ： 长度为 i ，以 A[i-1] 为末尾的序列，和长度为 j，以 B[j-1] 为末尾的序列，二者的最大公共后缀序列长度（该公共序列以A[i-1]（B[j-1]）为末尾项）
// 如果 A[i-1] != B[j-1] ， dp[i][j] = 0
// 如果 A[i-1] == B[j-1] ， dp[i][j] = dp[i-1][j-1] + 1
// base case：如果 i==0 || j==0 ，即其中一个长度为0，空子数组，没有公共长度，dp[i][j] = 0
// 有了状态转移方程，从 base case 可递推出 二维数组 dp 的每一项
// 最长公共子序列，以哪一项为结尾都有可能，所以每个 dp[i][j] 都可能是最大值

// 作者：hyj8
// 链接：https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/solution/zhe-yao-jie-shi-ken-ding-jiu-dong-liao-by-hyj8/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const findLength2 = (A, B) => {
  const m = A.length;
  const n = B.length;
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }                                 // 初始化二维数组dp，每一项都是0
  let res = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] == B[j - 1]) {     
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }                             // A[i-1]!=B[j-1]的情况，初始化时已经写了
      res = Math.max(dp[i][j], res);
    }
  }
  console.log('dp', dp)
  console.log('findLength2', res)
  return res;
};


findLength2([1,2,3,2,1], [3,2,1,4,7])

findLength2([1,2,3], [4,7])
findLength2([0,0,0,0], [0,0,0,0])
findLength2([0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,1,0,0])