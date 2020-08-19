/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced (root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  const getHeight = (root: TreeNode | null): number => {
    if (!root) {
      return 0
    } else {
      return Math.max(getHeight(root.left), getHeight(root.right)) + 1
    }
  }
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false
  }
  return isBalanced(root.left) && isBalanced(root.right)

}
