class Stack {
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