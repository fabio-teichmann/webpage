// lookup - O(n)
// pop    - O(1)
// push   - O(1)
// peek   - O(1)
//
// LIFO - Last In First Out

class StackA {
    constructor(){
        this.stack = [];
        this.length = 0;
    }

    pop() {
        if (this.length == 0) {
            return;
        }
        const item = this.stack.pop();
        this.length--;
        return item;
    }

    push(value) {
        this.stack.push(value);
        this.length++;
    }

    peek() {
        return this.stack[this.length - 1];
    }
}

myStack = new StackA();

myStack.push(5);
myStack.push(2);
myStack.push(1);
console.log(myStack.peek());

console.log(myStack.pop());

console.log(myStack);
// console.log(myStack.peek());


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top.value;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        if (this.bottom === null) {
            this.bottom = node;
        }
        this.length++;
    }

    pop() {
        const n = this.top;
        this.top = this.top.next;
        this.length--;
        return n.value;
    }

    isEmpty() {
        return (this.top === this.bottom);
    }
}

const myStack2 = new Stack();

console.log(myStack2.isEmpty());
myStack2.push('google');
myStack2.push('udemy');
console.log(myStack2.peek());
myStack2.push('ztm');

console.log(myStack2);

console.log(myStack2.pop());

console.log(myStack2);
console.log(myStack2.isEmpty());