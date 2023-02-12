// class Node {
//     constructor(value, node) {
//         this.value = value;
//         this.next = null;
//         this.prev = node;
//     }
// }
// import { Node, LinkedList } from './linked-list.js';
const {Node, LinkedList} = require('./linked-list.js');

class DLLNode extends Node {
    constructor(value, node) {
        super(value);
        this.prev = node;
    }
}

class DoublyLinkedList extends LinkedList{
    constructor(value) {
        super(value);
        this.head = new DLLNode(value, null);
        this.tail = this.head;
        this.prev = null;
        this.length = 1;
    }

    printList() {
        const array = [];
        let n = this.head;
        while (n !== null) {
            // const prev = (typeof n.prev !== 'undefined') ? n.prev.value : null;
            const prev = (n.prev !== null) ? n.prev.value : null;
            const next = (n.next !== null) ? n.next.value : null;
            array.push(`${prev}, ${n.value}, ${next}`);
            n = n.next;
        }
        return array;
    }

    append(value) {
        const n = new DLLNode(value, this.tail);
        this.tail.next = n;
        this.tail = n;
        this.length++;
    }

    prepend(value) {
        const n = new DLLNode(value, null);
        this.head.prev = n;
        n.next = this.head;
        this.head = n;
        this.length++;
    }
}

myDoublyList = new DoublyLinkedList(10);
myDoublyList.append(17);
myDoublyList.append(1);
myDoublyList.append(86);
myDoublyList.prepend(0);

console.log(myDoublyList.printList());