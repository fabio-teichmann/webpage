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

## DataStructs

### Arrays

- can hold functions
- can hold mixed types // can lead to performance issues

### Objects

```
var obj {
  fieldName: value,
  ...
};
```
