# Redux

State management framework that is often used together with React. Uses **Flux-patter**: _Action -> MIDDLEWARE -> Dispatcher -> Store -> View_ (uni-directinonal data-flow).

Can be used in conjunction with React state, does not necessarily replace all React state.

```
npm install redux
npm install react-redux
```

## When to use

- good for managing large state (big / complex applications)
- useful for sharing data between containers
  - with just React this data would need to be passed upwards until it's possible to share
- predictable state management using 3 principles:
  - single source of truth (one state object)
  - state is **read ony** (immutable) -> create new state after each action of user
  - changes using **pure functions** (always return same output)

## Keywords

- Action
  - user clicks on button, scrolls, ...
- Reducer
  - takes in action
  - creates change
- Store
  - saves changes from Reducer
- Make changes
  - based on store info

## Asynchronous actions

- applied through middleware
- `npm install redux-thunk`
-

## Sources

- [Redux-Toolkit](https://redux-toolkit.js.org/)
