/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
    return robSub(root, new Map());
};

/**
 * @param {TreeNode} root
 * @param {Map<TreeNode, number>} map
 */
var robSub = function (root, map) {
    if (root === null) {
        return 0;
    }

    if (map.has(root)) {
        return map.get(root);
    }

    let val = 0;

    if (root.left !== null) {
        val += robSub(root.left.left, map) + robSub(root.left.right, map);
    }

    if (root.right !== null) {
        val += robSub(root.right.left, map) + robSub(root.right.right, map);
    }

    val = Math.max(
        root.val + val,
        robSub(root.left, map) + robSub(root.right, map)
    );

    map.set(root, val);

    return val;
};
