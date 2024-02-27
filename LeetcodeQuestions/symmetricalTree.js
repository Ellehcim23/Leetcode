// O(n) time | O(d) space
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function symmetricalTree(tree) {
    return areSymmetrical(tree.left, tree.right);
}

function areSymmetrical(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.value !== right.value) return false;
    return areSymmetrical(left.left, right.right) && areSymmetrical(left.right, right.left);
}