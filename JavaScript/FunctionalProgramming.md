# Functional Programming

- separation of concerns
- each part of the code focusses on what it is good at
- separates data and functions (unlike OOP)
- goals are the same as OOP
- follows the **pure functions** approach

## Pure functions

- has to always return the same output
  - referential transparency
- has no side effects
  - does not change parameters outside of its scope

## What a function should (optimally) do

1. Handles 1 task only
2. should have `return` statement
3. should be pure
4. should not have shared state
5. should have immutable state
6. should be composable
7. should be predictable

## Indempotent

- function always does what it is expected to do
- used in API calls / DB calls
- valuable in parallel and distributed computing (predictability)

## Imparative vs. declarative

- imperative: what to do and how to do it
- declarative: what to do and what is expected

## Immutability

- not changing the data / state
  - make copies of state and manipulate that

## Closure

- use memoization (caching) if a lot of calculations are expected

```
const wrapper() {
    cache = [];
    return inner(params) {
        // use cache
        return result
    }
}
```

## Partial application

- similar to currying

```
const multiply = (a, b, c) => a*b*c;
const partialMultiply = multiply.bind(null, 5);
partialMultiply(4, 10) // 200
```

## Compose and pipe

- compose = apply several operations one after the other on the same input (factory line)
- right-to-left

```
const compose = (f, g) => (data) => f(g(data));
```

- pipe = like compose, but left-to-right

## Arity

- number of arguments a function takes
- the lower the arity the easier to understand / debug / etc.

## Composition vs. inheritance

- inheritance
  - focuses on "what it is"
  - coupling between super and child classes can have rippling effects (tightly coupled)
  - fragile base class problem -> can break code
  - hierarchy can be too rigid
- composition
  - focuses on "what it has"
  - can add functionality to object in a modular way (more flexible)
