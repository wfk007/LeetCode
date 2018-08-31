//Construct String from Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var tree2str = function (t) {
    if(!t) {
        return ''
    }
    //先序遍历
    return preSearch(t)
};

function preSearch(t) {
    var node, leftChild = null,
        rightChild = null;

    if (t !== null) {
        node = t.val
        if (t.left !== null) {
            leftChild = preSearch(t.left)
        }
        if (t.right !== null) {
            rightChild = preSearch(t.right)
        }
    }
    if (leftChild === null && rightChild === null) {
        return `${node}`
    } else if (leftChild === null && rightChild !== null) {
        return `${node}()(${rightChild})`
    } else if (leftChild !== null && rightChild === null) {
        return `${node}(${leftChild})`
    } else {
        return `${node}(${leftChild})(${rightChild})`
    }
}

var t1 = new TreeNode(1);
var t2 = new TreeNode(2);
var t3 = new TreeNode(3);
var t4 = new TreeNode(4);
t1.left = t2
t1.right = t3
t2.right = t4
console.log(tree2str(t1))
