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
    const res = robSub(root);

    return Math.max(res[0], res[1]);
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var robSub = function (root) {
    if (root === null) {
        return [0, 0];
    }

    const left = robSub(root.left);
    const right = robSub(root.right);
    const res = [0, 0];

    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    res[1] = root.val + left[0] + right[0];

    return res;
};

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

let l31 = new TreeNode(1, null, null);
let l32 = new TreeNode(3, null, null);
let l33 = new TreeNode(1, null, null);
let l21 = new TreeNode(4, l31, l32);
let l22 = new TreeNode(5, l33, null);
let l11 = new TreeNode(3, l21, l22);

rob(l11);
