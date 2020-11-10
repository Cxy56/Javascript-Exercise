
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function add(l1,l2) {
   while(l1 !== null || l2 !== null) {
     if(!result) {
       var node = new ListNode(0)
       var result = node
     } else {
       if(node.next === null) {
         node.next = new ListNode(0)
       }
       node = node.next
     }
     nums1 = l1 ? l1.val : 0
     nums2 = l2 ? l2.val : 0
     sum = nums1 + nums2
     node.val += sum
     if(node.val >= 10){
      node.val -= 10
      node.next = new ListNode(1)
     }
     l1 = l1 ? l1.next : null
     l2 = l2 ? l2.next : null
   }
   return result
 }