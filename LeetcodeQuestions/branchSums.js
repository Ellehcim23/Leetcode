class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }   
}

function branchSums(root, sum = 0, sums = []) {
    const current = root.value + sum 
  
    if (!root.left && !root.right) {
      sums.push(current)
    }
  
    if(root.left) {
      branchSums(root.left, current, sums)
    }
  
    if(root.right) {
      branchSums(root.right, current, sums)
    }
  
    return sums
    
  }