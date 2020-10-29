/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition (head: ListNode | null, x: number): ListNode | null {
  const left = new ListNode()
  const right = new ListNode()
  let temp = head
  let leftTemp = left
  let rightTeamp = right
  while (temp) {
    if (temp.val < x) {
      leftTemp.next = new ListNode(temp.val)
      leftTemp = leftTemp.next
    } else {
      rightTeamp.next = new ListNode(temp.val)
      rightTeamp = rightTeamp.next
    }
    temp = temp.next
  }
  leftTemp.next = right.next
  return left.next
}
