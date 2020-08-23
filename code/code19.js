/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const temp = new ListNode()
  temp.next=head
  let fast=temp
  let slow=temp
  let count=0
  while(fast&& head){
    fast=fast.next
    count++
    if(count>n+1){
      slow=slow.next
    }
  }
  slow.next=slow.next.next
  return temp.next
};
