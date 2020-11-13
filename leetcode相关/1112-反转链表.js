// 确定边界条件： 当链表为 null 或链表中仅有一个节点时，不需要反转
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
//!! 1. 
function reverseList(head) {
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
}