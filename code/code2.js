var addTwoNumbers = function (l1, l2) {
  const result = new ListNode('head')
  let str = result
  let temp = 0
  while (l1 || l2 || temp) {
    const value = ~~(l1 && l1.val) + ~~(l2 && l2.val) + temp
    str.next = new ListNode(value % 10)
    str = str.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
    temp = value > 9 ? 1 : 0
  }

  return result.next
}
