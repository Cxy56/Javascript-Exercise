
// 确定边界条件： 当链表为 null 或链表中仅有一个节点时，不需要反转
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// !!解法一：迭代法
var reverseList = function(head) {
  if(!head || !head.next) return head
  var prev = null, curr = head
  while(curr) {
      // 用于临时存储 curr 后继节点
      var next = curr.next
      // 反转 curr 的后继指针
      curr.next = prev
      // 变更prev、curr 
      // 待反转节点指向下一个节点 
      prev = curr
      curr = next
  }
  head = prev
  return head
};
//!!尾递归法
// 解题思路： 从头节点开始，递归反转它的每一个节点，直到 null ，思路和解法一类似
var reverseList = function(head) {
  if(!head || !head.next) return head
  head = reverse(null, head)
  return head
};

var reverse = function(prev, curr) {
  if(!curr) return prev
  var next = curr.next
  curr.next = prev
  return reverse(curr, next)
};

//!! 解法三：递归法

var reverseList = function(head) {
  if(!head || !head.next) return head
  var next = head.next
  // 递归反转
  var reverseHead = reverseList(next)
  // 变更指针
  next.next = head
  head.next = null
  return reverseHead
};