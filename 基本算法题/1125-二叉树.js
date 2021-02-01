// !! 二叉树前序遍历
function allNodes(root) {
  let result = []
  var preOrder = (node) => {
    if(node) {
      result.push(node.val)
      preOrder(node.left)
      preOrder(node.right)
    }
  }
  preOrder(root)

  return result
}

// !!平衡二叉树
// 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
// 如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
var isBalanced = function (root) {
  if (!root) {
      return true;
  }
  /** 递归法-有大量重复
   * 1. 自顶向下，求左右高度，计算差值
   */
  let leftHeight = getNodeHeight(root.left);
  let rightHeight = getNodeHeight(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};

// !!获取树的gao度
function getNodeHeight(node) {
  if (!node) {
      //没有了返回0,不表示不稳定
      return 0
  }
  return Math.max(getNodeHeight(node.left),getNodeHeight(node.right)) + 1;
}
