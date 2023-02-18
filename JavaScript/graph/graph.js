// PROS:
// - relationships

// CONS:
// - scaling is hard

// edge list
const graph = [[0,2], [2,3], [2,1], [1,3]] // pairs of connected paths

// adjacent list
const indexGraph = [[2], [2,3], [0,1,3], [1,2]] // index === value of node, [] === connections

// adjacent matrix
const matrix = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        if (node in this.adjacentList) {
            console.log(`node ${node} already in graph`);
            return this;
        }
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        // undirected
        if (!(node1 in this.adjacentList) | !(node2 in this.adjacentList)) {
            console.log(`either of the nodes ${node1} or ${node2} or both are missing in the graph`);
            return this;
        }
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections)
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');

myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
// myGraph.addEdge('1', '4');
myGraph.addEdge('1', '2');
myGraph.addEdge('0', '2');
myGraph.addEdge('0', '1');
myGraph.addEdge('5', '6');

myGraph.showConnections();

// const test = {};
// test['1'] = [];
// test['1'].push('2');
// test['1'].push('3');
// console.log(!('1' in test));
// console.log(test);