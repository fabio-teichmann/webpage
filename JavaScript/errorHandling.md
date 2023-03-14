# Error Handling

- consider a feature and not a mistake!

## Errors in JS

- use `Error` class
- `throw new Error('message')` stops execution of program
- properties
  - `.name`
  - `.message`
  - `.stack` call stack trace

## Try, catch

- for synchronous errors

```
try {

} catch (error) {

} finally {
    //gets always run
}
```

## Async error handling

- `.catch()` in promise chains
- needed for each promise (especially for nested structures)
- for `async await` use `try{} catch (error) {}`

## Extending errors

- errors can be extended (classes)
- individualises error messages
