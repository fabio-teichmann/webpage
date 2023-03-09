# OOP & FP

Help to write code that is

- clear and understandable
- easy to extend
- easy to maintain
- memory efficient
- DRY

## OOP and Functional Programming

- OOP: bring together data and behaviour
- FP: data and behaviour should be separated
- both approaches can work to together

## Factory functions

- create objects
- helps avoid redundant code
- all object attributes will be stored in memory (inefficient!)

## `Object.create()`

- creates link between variable and object -> prototype chain

## Constructor functions

- needs the `new` keyword to be invoked
- name should start with capital letter
- `this` keyword creates link between object and properties
- arrow functions are lexically scoped! (where it is written)

## Classes

- `class ClassName {}`
- needs `constructor(){}`
- does not need `function` keyword
- classes are instantiated through `new`
- classes are objects in JavaScript ('syntactic sugar')

## `this` 4 ways

- through `new` keyword
- implicit binding
  - this inside object
  - refers to object it appears in
- explicit binding
  - using `.bind()`
- arrow functions
  - lexical scoping
  - binds to where it is written

## Inheritance

- new class declaration using `extends SuperClass`
- inherits all properties and methods from super class
- needs `super()` within its constructor
- links up the prototype chain (not copying)

## Public vs. private

- since ES2022 privacy available as `#name` for both parameters and methods
