if (3+4 === 7) {
    alert("You are smart")
    alert("You got this!")
    alert("You are a wonderful human being")
    alert("without work, no results")
    alert("If you have clarity -> make a plan")
    alert("If you have a plan -> execute")
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

// OBJECTS
var user = {
    name: "John",
    age: 34,
};
console.log(user);
// expand object
user.favouriteFood = "spinach";
console.log(user);
// empty object
var user2 = {};
console.log(user2);
user2.name = "Klaus";
console.log(user2);

// LOOPS
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

for (var i = 0; i < todos.length; i++) {
    console.log(todos[i])
};