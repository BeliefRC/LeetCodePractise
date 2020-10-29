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

function sumNumbers (root: TreeNode | null): number {
  let result: number = 0
  if (!root) {
    return 0
  }

  function dfs (tree: TreeNode, numStr: string) {
    numStr += tree.val
    if (!tree.left && !tree.right) {
      result += parseInt(numStr)
    } else {
      if (tree.left) {
        dfs(tree.left, numStr)
      }
      if (tree.right) {
        dfs(tree.right, numStr)
      }
    }
  }

  dfs(root, '')
  return result
}
