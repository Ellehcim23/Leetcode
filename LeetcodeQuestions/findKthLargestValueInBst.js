class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findKthLargestValueInBst(tree, k) {
    // Write your code here.
    let kthLargestValue = null;

    function findkthLargestValueInBstHelper(tree) {
        if (!tree) return;

        findkthLargestValueInBstHelper(tree.right);
        if (k === 0) return;
        kthLargestValue = tree.value;
        k--;
        findkthLargestValueInBstHelper(tree.left);
    }
    findkthLargestValueInBstHelper(tree);
    return kthLargestValue;
}

