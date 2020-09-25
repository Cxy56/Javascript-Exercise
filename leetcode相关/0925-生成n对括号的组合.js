

/*我们可以每次试探增加 ( 或 ) ，注意：
加入 ( 的条件是，当前是否还有 ( 可以选择
加入 ) 的时候，受到 ( 的限制，如果已选择的结果里的 ( 小于等于已选择里的 ) 时，此时是不能选择 ) 的，例如如果当前是 () ，继续选择 ) 就是 ()) ，是不合法的
*/
// @param n   @type number    代表生成括号的对数
const generateParenthesis = (n) => {
  const res = []
  const dfs = (path, left, right) => {
      // 肯定不合法，提前结束
      if (left > n || left < right) return
      // 到达结束条件
      if (left + right === 2 * n) {
        console.log('path', path)
          res.push(path)
          return
      }
      // 选择
      dfs(path + '(', left + 1, right)
      dfs(path + ')', left, right + 1)
  }
  dfs('', 0, 0)
  console.log(res)
  return res
}

generateParenthesis(3)
