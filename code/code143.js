/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const arr = []
  //将链表中的每一项存入到数组
  while (head) {
    let temp = head
    head = head.next
    temp.next = null
    arr.push(temp)
  }
  //双指针，对撞指针
  let left = -1
  let right = arr.length
  const link = new ListNode()
  let temp = link
  while (++left <= --right) {
    if (left !== right) {
      temp.next = arr[left]
      temp.next.next = arr[right]
      temp = temp.next.next
    } else {
      temp.next = arr[left]
    }
  }
  return link.next
}
