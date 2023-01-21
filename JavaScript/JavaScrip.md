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

- === equal
- !== unequal

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

### Advanced Arrays

### Objects

```
var obj {
  fieldName: value,
  ...
};
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
