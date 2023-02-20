# Typescript

- turns JS into a static typed language (vs. a dynamic typed)
- provides **type safety** for JS

## Dynamic vs Static

- dynamic does not require a variable type
  - types get evaluated at runtime
- static restricts to a certain type (declare explicitly)
  - self-documenting
  - show bugs at compiling

## Strong vs Weaks typing

- **weak**:
  - auto-converts variables for operations (e.g. turning number to string to append to another string)
  - e.g. JavaScript
- **strong**:
  - throws an error when different types are brought together
  - e.g. Python

## Static typing in JS

### TypeScript (MS)

- has its own compiler
- superset of JavaScript

### flow (FB)

- used with React (pre-built)
- uses Babel under the hood
- use `// @flow` at the top of the file

### Reason (FB)

- less demand

### Elm

- less demand

## TypeScript compiler

- compiler runs on Node
