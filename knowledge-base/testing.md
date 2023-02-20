# Testing

- big programs are mostly immensely complex
- need to ensure that new features introduced do not break it / create costly bugs

## Test files

- runs in dev environment
- `{filename}.test.js` as convention
- `npm run test` to start tests

## Types of tests

1. Unit tests
2. Integration tests
3. Automation tests

### Unit tests

- test **individual** pure functions / classes
- functions need to have 0 side effects
- tests are easy and cheap
- **don't test a contract** (the connection/integration between components)

### Integration tests

- test how **different pieces of code** are working together
  - use spies to ensure expected side effects
  - use stubs to simulate behaviour of components that are not within the specific test
  - e.g. mock DB calls
- are more expensive to build (complexity and change of components)

### Automation tests

- test real-life scenarios (UI-tests)
- are the hardest to set up (users have different machines, configurations...)
- are usually most expensive
- libraries
  - TestCafé
  - cypress
  - Nightmare (webscraping)
  - Webdriver I/O

## Testing libraries

### Scaffolding

Writing tests.

- Jasmine
- Jest
- Mocha

### Assertion libraries

Test that a value contains what is expected.

- Jasmine
- Jest
- chai

### Test runners

Allows us to run our tests.

- Jasmine
- Jest
- Mocha
- Karma (run tests in browser)

### Mock, spies and stub

Spies = provide insides on functions (#calls, when, by whom, ...)
Stubbing = replaces functions to ensure expected behaviour happens (e.g. fake a server)
Mocks = faking behaviour of functions

- Jasmine
- Jest
- Sinon.js

### Code coverage

What % of functions are covered by tests
`npm test -- --coverage`

- istanbul
- Jest

## React specific testing

- snapshot testing
- Enzyme
