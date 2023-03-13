# Asynchronous JavaScript

## Promises

- future value
- 3 possible states
  - fulfilled
  - pending
  - rejected
- replace callbacks "pyramid of doom"

```
const promise = new Promise((resolve, reject) => {
    resolve('Stuff worked');
    reject('Error, it broke');
})

// to extract info from promise
promise.then(result => console.log(result));
```

- promise handling can be chained (multiple `then`)
- `.catch()` catches errors that happen in the chain before it

## Job Queue

- callback queue (task queue) was not enough
- job queue (microtask queue) is smaller but has higher priority than task queue

## Parallel, sequence, race

- how to handle multiple promises

```
const promisify = (item, delay) => {
    new Promise((resolve) => setTimeout(() => resolve(item), delay));
}
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

// parallel
async function parallel() {
    const promises - [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel is done: ${output1} ${output2} ${output3}`;
}

// sequencial
async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done: ${output1} ${output2} ${output3};
}

// race (first wins)
async function race() {
    const promises - [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1};
}

```

## `Promise.allSettled`

- like `.all()` but regardless of state of promise (reject vs resolve)

## Threads, concurrency and parallelism

- web workers help to manage threads (mostly just act in the background)
