class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * @param {TreeNode} node
 */
function dfs(node) {
    console.log(node.val);
    if (node.left != null) dfs(node.left);
    if (node.right != null) dfs(node.right);
}

/**
 * @param {TreeNode} root
 */
function bfs(root) {
    let queue = [root];
    while (queue.length > 0) {
        let count = queue.length;
        while (count-- > 0) {
            let node = queue.shift();
            console.log(node.val);
            if (node.left != null) queue.push(node.left);
            if (node.right != null) queue.push(node.right);
        }
    }
}

let node4 = new TreeNode(3, null, null);
let node3 = new TreeNode(30, null, null);
let node1 = new TreeNode(10, node3, node4);
let node2 = new TreeNode(20, null, null);
let root = new TreeNode(9, node1, node2);

dfs(root);
bfs(root);
