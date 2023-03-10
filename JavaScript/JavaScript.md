# JavaScript

- enables actions on websites
- single threaded (1 call stack) language that can be non-blocking (asynchronous execution)
  - does not have to deal with complicated scenarios that can arise in a multi-threaded environment (e.g. dead locks)

## JavaScript Run-time Environment

- part of the browser
- contains
  - JS Engine,
  - Web APIs (DOM, AJAX, Timeout),
  - Callback Queue (onClick, onLoad, onDone),
  - Event Loop (checks whether call stack and callback queue are empty)

## What is a program?

- allocates memory (**memory heap**)
  - limited space of memory
  - unused parameters (usually global parameters) can cause **memory leak** == occupied but unused memory
- parses and executes scripts (**call stack**)
  - reads in script and places one action after the other on the call stack
  - from there actions are executed one after the other and removed from stack

## Modules

[ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

- a module bundler combines all required .js files into one (e.g. Webpack)
- eliminates namespace pollution and makes sure that dependencies are met

## Types

- Number
- String
  - '' or ""
  - Strings can be added (as in Python)
  - when adding `Number` to `String`, the `Number` gets converted to `String` (10 + "34")
  - when substracting, `String` gets converted to `Number` (10 - "3")
- Boolean (true / false)
- Undefined
  - variable has not been assigned
- Null
- Symbol (new in ECMAScript 6)
  - `let sym1 = Symbol();`
  - create unique type (like an ID)
- Object
  - collections of properties

## Comparisons

- === equal (**without** type coercion!)
- !== unequal
- == equal (**with** type coercion!)

## Variables

- `var name = value;`
- can start with $ or \_
- uses camelCase

## Control Flow

### IF ELSE

```
if (var1 === var2) {
    action1;
} else if (comparison2) {
    action2;
} else {
    action3;
}
```

- && = AND
- || = OR
- ! = NOT

### Loops

```
for (var i = 0; i < todos.length; i++) {
  action;
}

var param = 0
while (param < 10) {
  action;
  param++;
}

// do first, then check
do {
  param--;
  action;
} while (param > 0)
```

forEach:

- called as method on arrays
- uses a function as input

```
array.forEach(function(param, i) {
  console.log(i, param)
})
```

### Ternary operator

`condition ? expr1 : expr2;`

- if `condition` === `true` -> return `expr1`
- else `expr2`

### Switch

```
switch (param) {
  case ...:
    action;
    break;
  case ...:
    action2;
    break;
  default:
    action
}
```

## DataStructs

### Arrays

- can hold functions
- can hold mixed types // can lead to performance issues
- is considered an object (not primitive)
- to copy an array:

```
let array1 = [1, 2, 3];
let array2 = [].concat(array1);
```

### Objects

General declaration:

```
var obj {
  fieldName: value,
  ...
};
```

- reference type (opposed to `primitive type`)
  - objects are stored at specific storage locations (like pointers)
  - objects can only equal if they are referencing the same location
  - `arrays` are objects, not primitives
  - how to clone an object (shallow and deep):

```
let obj = {a: 5};
let copy1 = Object.assign({}, obj);
let copy2 = {...obj};

// deep cloning
// can have performance issues!
let superClone = JSON.parse(JSON.stringify(obj));
```

- context vs. scope
  - `this` refers to the current object it is inside of
  - that is important for instantiation
- instantiation
  - creates a copy of a certain object
  - through `constructor` method
  - uses `new` keyword

```
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  // adds on top of the parent class
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`I am a ${this.type}`);
  }
}

// creation of instance
const wizard1 = new Wizard('Shelly', 'Healer');
```

## ES5 and ES6 (ECMAScript)

- currently on version 7
- each script introduces new functionalities
- Babel offers ways to use new features

### `let` and `const`

- `let` enables scopes within expressions {} (e.g. IF statements)
- `let` replaces `var`
- `const` variables cannot be updated
  - can update properties of a `const` object (!)
  - can group assign
  - can use dynamic properties declaration
  - if property and value are the same, we can simplify declaration
  - can use back ticks with assembled strings

```
const obj {
  player: "Bobby";
  experience: 100;
  wizardLevel: false;
}
// can change properties
obj.wizardLevel = true;

// group assignement
const { player, experiece } = obj;
let { wizardLevel } = obj;

// declaring attributes dynamically
const name = "john";

const obj {
  [name]: "Bill";
  ["hi" + " there"]: 5;
}

// value === property
const obj {a, b, c}

// assembled strings
const greeting = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet}.`;
```

### Functions

- can assign default values to parameters (like in Python)
- can declare **arrow functions**

```
const add = (a,b) => a + b;
const add = (a,b) => {
  action
}
```

- can operate `closures`

### Closure

- child scope always has access to parent scope, not vice versa
- helps making it redundant to run/access parent function again

### Currying

- change function to only accept 1 parameter at a time
- can encapsulate partial functionality

```
const multiply = (a, b) => a * b;
vonst curried = (a) => (b) => a * b;
```

### Compose

- chaines functions together to act on input
- takes functions as input and returns a function that chains them together to act on a new input

```
const compose = (f, g) => (a) => f(g(a));
```

### Avoiding side effects & functional purity

- side effect: everything that a function does to affect ist outside scope
- functional purity: functions should not have side effects and returns the same value always (**deterministic**)

# ECMA Script (ES) Updates

[Features] (https://github.com/daumann/ECMAScript-new-features-list)

## ES7 (2016)

- `.includes()` for arrays and strings
- exponential operator `**`

## ES8 (2017)

- **string padding**
  - `.padStart(length)` fills whitespace up to a total length of length
  - `.padEnd()`
- trailing commas in functions, parameter list
  - supports a "left-over" comma on a list
  - also for calling parameters
- `Object.values(obj)` and `Object.entries(obj)`
  - get only values back or key-value pairs in array form
- **Async Await**
  - make code look asynchronous

```
async function playerStart() {
  const firstMove = await movePlayer(100, 'Left'); // can store result of action
  await movePlayer(200, 'Left');
  await movePlayer(400, 'Right');
  await movePlayer(100, 'Left');
}
```

## ES9 (2018)

- **spread operator**
  - disassembles components of object / array
  - `const { param1, ...rest } = obj;` --> assign value of `param1` to it and the remaining components are saved in `rest`
- **`finally`** for promises
  - executes in any case after all has run
  - usually does not receive input from `.then` chain
- **`for await of`** for async await calls
  - can iterate over promises

```
const getData = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}
```

## ES10 (2019)

- `flat(n)` for arrays
  - eliminates nested structures in an array by n degrees
  - default degree = 1
  - removes empty entries in an array
- `flatMap(value => returnValue)` for arrays
  - depth of 1
  - performs returnValue action
- `.trimStart()` and `.trimEnd()`
- formEntries
  - transforms a list of arrays into object items

```
userProfiles = [["name", 18], ["name2", 24], ...]

const obj = Object.fromEntries(userProfiles)
```

- update to `try {} catch (error) {}`
  - the `error` parameter does not need to be included anymore

## ES2020

- `BigInt`
  - new type in JS
  - add `n` after number to indicate a number is `BigInt`
  - can handle numbers above `MAX_SAVE_INTEGER`
- Nullish coalescing operator `??`
  - in place of OR `||` operator
  - handy for `falsy` cases
- Optional chaining operator `?`
  - makes checks of nested objects easier
  - checks for properties in object

```
let param = obj?.sub-obj?.property;
```

- **`.allSettled()`**

  - `Promise.all()` has to have all promises to succeed
  - `Promise.allSettled()` returns all promises regardless of status

- `globalThis`
  - works outside the browser
  - unified variable across systems

## ES2021

- `str.replaceAll(from, to)`
  - replaces all occurrences of `from` to `to`
  - returns replaced string
  - `replace()` only replaces the first occurrence
- **`.any()`**
  - returns whatever promises resolves first
  - if none resolves, it throws an error

## ES2022

- `.at(index)`
  - arrays, strings
  - gets an element at `index`
- top level await (asynchronous section)
  - `await` keyword can be used without the `async` wrapper

# HTTP(S), AJAX, JSON (Asynchronous JS)

- HTTP is a protocol (standard) that allows the fetching of files
- foundation of the web
- clients and servers use it for communication between each other (client request / server response)

## Terminology for CRUD operations (create, read, update, delete)

- `GET` - get entry
- `POST` - add entry
- `PUT` - update entry
- `DELETE` - delete entry

## Response Status Codes:

Used to signal status of specific operations/actions

- 200 -> success
- 304 -> not modified
- 404 -> not found
- ...

Responses are sent either through `query string` or the `body`

## JSON

JavaScript Object Notation

- syntax for storing and exchanging data
- text, written with JavaScript object notation

## AJAX

Back in the days each request had spawned a full page refresh. This is waist of bandwidth. Content can be created on the fly once data is received from server.

- today covered by `fetch()`
  - returns a `promise`
  - the promise needs to be unpacked using `.then(response => response.json()).then(do sth with data)`

## Promises (since ES6)

- a piece of information that may produce a result in the future
  - result value, or
  - reason for rejection
- statuse
  - fulfilled
  - rejected
  - pending
- uses call back functions (once action happens (listener), do x)
- promises are resolved **asynchronously**
