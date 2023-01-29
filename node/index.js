// import {largeNum} from "./script2.js";
// const largeNum = require('./script2.js');

//built in modules
// const c = require('http');

let a;
// conditional import
if (true) {
    const {largeNum} = await import('./script2.js');
    a = largeNum
}
console.log(a + 1);
