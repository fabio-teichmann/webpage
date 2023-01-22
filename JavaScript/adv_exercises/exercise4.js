//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sumTwo = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // 31


//Currying: What does the last line return?
const sum2 = (a, b) => a + b
const curriedSum2 = (a) => (b) => a + b
const add5C = curriedSum2(5)
add5C(12) // 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // 10 + 5 + 1 = 16

//What are the two elements of a pure function?
// - no side affects
// - deterministic return value