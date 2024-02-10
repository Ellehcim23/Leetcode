// O(n^2) time | O(n) space
function sortStack(stack) {
    if (stack.length === 0) return stack;
    let top = stack.pop();
    sortStack(stack);
    insertInSortedOrder(stack, top);
    return stack;
}

function insertInSortedOrder(stack, value) {
    if (stack.length === 0 || stack[stack.length - 1] <= value) {
        stack.push(value);
        return;
    }
    let top = stack.pop();
    insertInSortedOrder(stack, value);
    stack.push(top);
}
//pop all elements from the stack then there would be an empty stack.
//then we can push the elements back into the stack in ascending order