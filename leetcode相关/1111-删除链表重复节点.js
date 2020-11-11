/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
var removeDuplicateNodes = function(head) {
  let map = {},
  newHead = new ListNode(null), // 防止 head 的头结点为 null
  prev = newHead,
  curr = head

  newHead.next = head

  while(curr) {
    let currVal = curr.val
    if(map[currVal] === undefined) {
      // 不重复
      map[currVal] = true
      prev = curr
      curr = curr.next
    } else {
      prev.next = curr.next
      curr = curr.next
    }
  }
  return newHead.next
}