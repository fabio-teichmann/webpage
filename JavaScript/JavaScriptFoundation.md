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
