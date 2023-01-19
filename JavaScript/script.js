if (3+4 === 7) {
    alert("You are smart")
}

function sayHello() {
    console.log("Hello");
}
sayHello()

// function expression === anonymous function
var sayBye = function() {
    console.log("Bye!");
}

sayBye()

function multiply(a, b) {
    return a * b 
}

multiply(2, 3)

// ARRAYS
var list = [1,2,3,4]
list.shift() // remove first item
list.pop() // remove last item
list = list.concat([5,6,7]) // need reassign
list.sort()