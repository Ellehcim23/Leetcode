//depth first search inlcudes looking at nodes to see if children exist
// if children exist see if they have children (recursion)
// for each child push that value to an array
// 0(v+e) time | 0(v) space
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }


    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        array.push(this.name);
        for (let child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}