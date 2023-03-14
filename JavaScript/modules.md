# Modules

- sharing and reusing code
- js scripts are merged into one (danger to overwrite!)

## Module pattern

- global scope
  - module scope (share variables between layers)
    - function scope
      - block scope (let, const)

```IIFE
var module = (function() {
    //...
    return {
        property: property
    }
})()
```

### Pros

### Cons

- still able to have name clashes
- order of scripts is important

## CommonJS, AMD (asynchronous module definition), UMD (universal)

### CommonJS

- modules get loaded synchronously
- still used on the server side

```
const module1 = require('module1');

function fight() {

}

module.exports = {
    fight: fight
}
```

### AMS

```
define(['module1', 'module2'], function (module1Import, module2Import){
    var module1 = module1Import;
    var module2 = module2Import;

    function dance() {
        //...
    }

    return {
        dance: dance,
    };
});
```

## Native module support (ES6)

- needs `<script type="module">` in .html
- needs to be served from server
  - e.g. `live-server` (npm)

```
import module1 from 'module1';

export function jump() {

}
```

- [MDN imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

## Top level await

- `await import()` based on condition
