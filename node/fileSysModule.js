import fs from 'fs';
// const fs = require('fs');

// asynchronous!
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1', data.toString());
})

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());

// APPEND
// fs.appendFile('./hello.txt', '\nThis is very cool', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// WRITE
// fs.writeFile('./bye.txt', 'sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// DELETE
// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err);
//     }
// })