// While we have a fast pointer and that pinter has a next value
// we can iterate through the linked list and set the slow pointer to the next node
// and the fast pointer two nodes over
// when the fast pointer reaches the end of the linked list, the slow pointer will be at the middle
class LinkedList  {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function middleNode(linkedList) {
  let slowP = linkedList;
  let fastP = linkedList;

    while (fastP && fastP.next) {
        slowP = slowP.next;
        fastP = fastP.next.next;
    }
    return slowP;
}