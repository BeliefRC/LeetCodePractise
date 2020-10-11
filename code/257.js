/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = []
  const dfs = (tree, paths) => {
    if (tree) {
      const val = tree.val
      const temp = [].concat(paths)
      temp.push(val)
      if (!tree.left && !tree.right) {
        result.push(temp.join('->'))
      } else {
        dfs(tree.left, temp)
        dfs(tree.right, temp)
      }
    }

  }
  dfs(root, [])
  return result
}
