class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

/*
    1
   / \
  2   5
 / \   \
3   4   6
*/

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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten (root: TreeNode | null): void {
  const stack: number[] = []
  const dfs = function (root: TreeNode | null) {
    if (root) {
      stack.push(root.val)
      dfs(root.left)
      dfs(root.right)
    }
  }
  dfs(root)
  console.log(stack)
  let num: number = 0
  const len: number = stack.length

  const fn = (node: TreeNode | null) => {
    if (!node) {
      return
    }
    node.val = stack[num++]
    if (node.left) {
      node.left = null
    }
    if (num < len) {
      if (!node.right) {
        node.right = new TreeNode()
      }
      fn(node.right)
    }
  }
  fn(root)
}
