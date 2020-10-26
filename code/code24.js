//迭代
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const prevHead = new ListNode()
  prevHead.next = head
  let temp = prevHead
  while (temp.next !== null && temp.next.next != null) {
    const first = temp.next
    const second = first.next
    const next = second.next
    //注意需要修改temp
    temp.next = second
    first.next = next
    second.next = first
    temp = first
  }
  return prevHead.next
}

//递归
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head
  } else {
    const first = head
    const second = head.next
    first.next = swapPairs(second.next)
    second.next = first
    return second
  }
}
