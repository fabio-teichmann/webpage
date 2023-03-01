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
- goes through interpreter, profiler, compiler
- generates bytecode

## Interpreter and Compiler

- interpreter: translate and read file line by line (on the fly)
- compiler: works ahead of time to create computer readable code; translates to another language (lower level language)
- all languages need to be interpreted and compiled
