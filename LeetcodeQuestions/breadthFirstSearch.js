// O(v+e) time | O(v) space
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array) {
        let queue = [this];
        while(queue.length > 0) {
            let current = queue.shift();
            array.push(current.name);
            for(let child of current.children) {
                queue.push(child);
            }
        }
        return array;
    }
}

