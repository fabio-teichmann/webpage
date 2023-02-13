// lookup  - O(n)
// enqueue - O(1)
// dequeue - O(1)
// peek    - O(1)
//
// FIFO - First In First Out

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first.value;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.first = node;
            this.last = node;
            // this.first.next = this.last;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    dequeue() {
        if (this.length === 0) {
            return;
        }
        const n = this.first;
        this.first = this.first.next;
        this.length--;
        return n.value;
    }
}

const myQueue = new Queue();

myQueue.enqueue(1);
// console.log(myQueue);
myQueue.enqueue(3);
myQueue.enqueue(7);
myQueue.enqueue(5);

console.log(myQueue);
console.log(myQueue.dequeue());
