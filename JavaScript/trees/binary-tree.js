// Each parent has 2 children

// Full binary tree
// - all nodes have either 2 or 0 children

// Perfect binary tree
// - full binary tree
// - buttom layer is completely full
// - efficient
// - last level has (n+1)/2 nodes, i.e. > 50%

// lookup - O(log N)
// insert - O(log N)
// delete - O(log N)

// Binary search tree (BST)

// Pros:
// - better than O(n)
// - ordered 
// - flexible size 

// Cons:
// - no O(1) operations

// Unbalanced BST:

// lookup - O(n)
// insert - O(n)
// delete - O(n)


class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
            return;
        } 
        let temp = this.root;
        while (temp !== null) {
            if (value < temp.value) {
                if (temp.left === null) {
                    temp.left = node;
                    return this;
                } else {
                    temp = temp.left;
                }
            } else if (value > temp.value) {
                if (temp.right === null) {
                    temp.right = node;
                    return this;
                } else {
                    temp = temp.right;
                }
            } else {
                console.log(`value ${value} already in tree.`);
                return temp;
            }
        }
    }

    lookup(value) {
        let temp = this.root;
        while (temp !== null) {
            if (temp.value === value) {
                return temp;
            }
            if (value < temp.value) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }
        console.log(`value ${value} not in tree.`);
        return null;
    }

    remove() {
        return;
    }
}


function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
console.log(tree);

console.log(tree.lookup(4));
tree.lookup(7);

tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree);

console.log(tree.lookup(4));
console.log(tree.lookup(20));

console.log(tree.insert(15));

console.log(JSON.stringify(traverse(tree.root)));