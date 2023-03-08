# The 2 Pillars

- closures
- prototypal inheritance

## Functions are objects

- when invoking a function we get:
  - execution context
  - this
  - arguments (array-like structure)
  - variable environment
- functions are created as a callable object

## First class citizens

- functions can be assigned to variable
- can pass function as argument to another function
- can return function as return values

## Higher order functions

### Definition

- function that can take a function as parameter
- function that returns a function

### Examples

```
const multiplyBy = (by) => {
    return function (factor) {
        return by * factor;
    };
}
```
