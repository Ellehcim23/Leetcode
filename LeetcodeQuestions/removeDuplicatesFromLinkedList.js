// traverse linked list (assume it's sorted)
// if the current node's value is equal to the next node's value, then we know that we have a duplicate
// we can then set the current node's next pointer to the next node's next pointer

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode.next !== null){
        if (currentNode.value === currentNode.next.value){
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return linkedList;
}