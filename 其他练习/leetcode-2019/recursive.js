// !! 递归函数
var longestPath = function(root) {
  var maxCount = 0
  function getLen(root, val) {
    if(!root) return 0
    var l = getLen(root.left, root.val)
    var r = getLen(root.right, root.val)
    maxCount = Math.max(maxCount, l+r)
    if(root.val === val) {
      return Math.max(l,r) + 1
    }
    return 0
  }
  if (!root) return 0
  getLen(root, root.val)
  return maxCount
}
