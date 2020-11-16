// 示例：
// 给定一个链表: 1->2->3->4->5, 和 k = 2.
// 返回链表 4->5.

// 不需要知道链表长度，指针1先走k-1步，然后指针2和指针1同时前进，
// 当指针1指向链表最后一个元素时，指针2即为所求。
var getKthFromEnd = function(head, k) {
  let p = head, q = head
  let i = 0
  while(p) {
    if(i >= k) {
      q = q.next
    }
    p = p.next
    i++
  }
  return i < k ? null : q
}
