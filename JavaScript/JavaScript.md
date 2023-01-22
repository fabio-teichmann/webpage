# JavaScript

- enables actions on websites

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

## ES7 (2016)

- `.includes()` for arrays and strings
- exponential operator `**`

## ES8 (2017)

- string padding
  - `.padStart(length)` fills whitespace up to a total length of length
  - `.padEnd()`
- trailing commas in functions, parameter list
  - supports a "left-over" comma on a list
  - also for calling parameters
- `Object.values(obj)` and `Object.entries(obj)`
  - get only values back or key-value pairs in array form
- Async Await

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
