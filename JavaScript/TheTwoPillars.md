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

## Closures

Enabled through 2 things:

1. functions as 1st class citizens
2. lexical scope

-> closure allows function to access variables of a scope/environment even after it leaves the scope it was declared in

### Example

```
function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`;
        }
    }
}

a()()() // -> "grandpa > father > son"
```

- garbage collector cleanes up function from stack
- variables remain (as variables are still used in lexical chain below)

### Benefits

- **memory efficiency**
  - initiation of data/variable can be done once and referenced multiple times through closures
- **encapsulation**
  - hiding information that is not necessary to outside world
  - principle of least privilige

```
const array = [1,2,3,4];
for (var i = 0; i < array.length; i++) {
    // immediately invoked function
    (function(closureI) {
        setTimeout(function() {
            console.log('I am at index ' + array[closureI]);
        }, 3000)
    })(i)
}
```
