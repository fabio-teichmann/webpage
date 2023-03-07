# Types

Primitive types:

- number
- boolean
- string
- undefined (absence of definition)
- null (absence of value; type === Object!)
- Symbol('')

Non-primitive types:

- {}
- [] (object)
- function(){} (object)

Using `typeof param` reveals the type.

## "Everything" is an object

- primitive types have object wrappers
- allows to use methods on primitive values

## Pass by value vs. pass by reference

- primitive types are "passed by value" -> values get copied when new variable gets assigned to existing variable

```
let a = 5;
let b = a;
b++; // a === 5 / b === 6
```

- objects are "passed by reference" -> can overwrite properties

```
let obj1 = {number: 5};
let obj2 = obj2;
obj2.number = 6; // both obj1 and obj2 reference the same info === 6
```

- proper cloning of arrays

```
let c = [1,2,3];
let d = [].concat(c);
```

- proper cloning of objects

```
let obj1 = {name: 'Hans'};

// shallow cloning
let obj2 = Object.assign({}, obj1);
let obj3 = {...obj1};

// deep cloning - can have performance implications!
let obj4 = JSON.parse(JSON.stringify(obj1))
```
