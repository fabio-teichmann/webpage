# JavaScript Foundation

- single threaded language
- has a call stack
- uses memory heap

## JavaScript Engine

- translates JS files to computer readable text (0 and 1)
- there are lots of different engines available for JS
- engine implementations follow the ECMAScript standards

### Inside the engine

- parser parses code into tokens (divide by keywords)
- convert to AST (abstract syntax tree)
- goes through interpreter (generate bytecode) -> bytecode cannot be understood by machines
- profiler (monitor); if code is run several times, it gets sent to compiler
- compiler (optimised code)

## Interpreter and Compiler

- interpreter:
  - translate and read file line by line (on the fly)
  - quick to get up and running
  - when running code more than once -> can get really slow
- compiler:
  - works ahead of time to create computer readable code; translates to another language (lower level language)
  - takes more time to get up and running
  - simplifies / optimises code -> makes resulting code faster
- all languages need to be interpreted and compiled
- JIT compiler combines both

## Writing optimised code

Knowing how the compiler works, we can ensure that written code enables it to optimise best.

### Be careful with

- `eval()`
- arguments
- `for in`
- `with` (not seen often)
- `delete`

### Reasons

- inline caching (done by compiler)
  - saves data that is used multiple times
- hidden classes
  - instantiate object properties in the SAME order
  - otherwise the compiler will instantiate separate hidden classes to deal with them

## WebAssembly

- standard binary executable format
- https://webassembly.org/

## Call stack and memory heap

- needs to allocate memory (memory heap)
- keep track of position in code (call stack)

### Memory heap

- unordered storage
- big area available to store

### Call stack

- adds functions to run onto the heap as they appear (FILO)
  - stored in stack frame
  - stores variables and functions
- starts with Global Execution Context
- pops functions from heap as they are executed

## Memory leak

- fill up memory heap with variables (e.g. continue pushing to an array)
- `eventListeners` are a common example
- `setInterval(() => {...})`

## Single threaded

- only 1 call stack
- only 1 function executed at a time
  -> JS as of itself is synchronous

## JavaScript Runtime

- web browser uses Web API in the background (asynchronous)
  - sent HTTP request
  - events
  - caching
  - timeouts
- Event Loop manages callback queue for work done by Web API
  - pushes work done back to the stack (once it's empty)

### Node.js

- Node.js is a JS runtime
- written in C++
- does more than the browser (e.g. accessing file systems)

## Execution context

- whenever a function is calles ()
- creates an execution context for each function
- `global()` is the base execution context
  - gives access to `this` keyword
  - gives access to Global Object (window in browser, global for Node.js)

## Lexical environment

- at compile time
- where is code written? (scope)

## Hoisting

- JS engine allocates memory to variables and functions before execution
- variables are partially hoisted (only names)
- functions are completely hoisted
