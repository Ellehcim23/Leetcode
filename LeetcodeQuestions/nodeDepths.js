//essentially for every level of a tree we there is a value ascending by 1
// add the value of the root node to the array
// then for each child node, add 1 to the value of the root node and then add that value to the array
// we can use recursion to solve this problem
// if this.right exist or this.left exist, we can add 1 to the value of the root node +=1
// if this.right and this.left are null, then we know that we are at the bottom of the tree
// we can then return the array


function nodeDepths(root) {
    let sumOfDepths = 0;
    const stack = [{node: root, depth: 0}];
    while (stack.length > 0) {
        const {node, depth} = stack.pop();
        if (node === null) continue;
        sumOfDepths += depth;
        stack.push({node: node.left, depth: depth + 1});
        stack.push({node: node.right, depth: depth + 1});
    }
    return sumOfDepths;
}

//recursive solution
function nodeDepths(root, depth = 0) {
    // Write your code here.
    if (!root) {return null} 
      else return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

console.log(nodeDepths(BinaryTree));