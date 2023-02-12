class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        // this.head = {
        //     value: value,
        //     next: null,
        // }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const node = new Node(value);
        // const node = {
        //     value: value,
        //     next: null,
        // };
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value) {
        const node = new Node(value);
        // const node = {
        //     value: value,
        //     next: null,
        // };
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList)

myLinkedList.append(5);
// myLinkedList.append(7);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);