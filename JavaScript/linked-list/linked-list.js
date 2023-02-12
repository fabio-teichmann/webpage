class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    insert(index, value) {
        // inserts value at index, i.e. before the element that was at index before.
        // Indeces start at 0 (head).
        // if index >= length of linked list, the element will be appended at the end
        // of the list.
        if (index >= this.length - 1) {
            this.append(value);
        } else if (index === 0) {
            this.prepend(value);
        } else {
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            const node = new Node(value);
            node.next = temp.next;
            temp.next = node;
            this.length++;
        }
    }

    printList() {
        const array = [];
        let n = this.head;
        while (n !== null) {
            array.push(n.value);
            n = n.next;
        }
        return array;
    }

}

const myLinkedList = new LinkedList(10);
// console.log(myLinkedList)

myLinkedList.append(5);
// myLinkedList.append(7);
myLinkedList.append(16);
myLinkedList.prepend(1);

myLinkedList.insert(2, 77);
console.log(myLinkedList.printList());
// console.log(myLinkedList);