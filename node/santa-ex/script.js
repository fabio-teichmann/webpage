import fs from 'fs';
import utf8 from 'utf8';



// change count based on decision

// set a counter
let count = 0;
// read file
fs.readFile('./instructions.txt', (err, data) => {
    console.time('santa');
    if (err) {
        throw err;
    }
    // console.log('length:', data.length)
    let firstBase = false;
    // look at every single character
    for (let i = 0; i <= data.length; i++) {
        const c = data.toString()[i];

        if (c === '(') {
            // decide whether it's up ( or down )
            count++;
            // console.log(countUp);
        } else if (c === ')') {
            count--;
        } else {
            console.log('detected invalid character:', c);
        }
        if (count < 0 && !firstBase) {
            console.log('going to basement at:', i + 1);
            firstBase = true;
        }
    }
    
    console.log('\nCount:', count);
    console.timeEnd('santa');
})


fs.readFile('./instructions.txt', (err, data) => {
    console.time('santa2');
    if (err) {
        throw err;
    }
    const directions = data.toString();
    const dirArray = directions.split('');
    const answer = dirArray.reduce((acc, val) => {
        if (val === '(') {
            return acc += 1;
        } else if (val === ')') {
            return acc -= 1;
        }
    }, 0)
    console.log('Count:', answer)
;    console.timeEnd('santa2');
});


fs.readFile('./instructions.txt', (err, data) => {
    console.time('santa3');
    if (err) {
        throw err;
    }
    const directions = data.toString();
    const dirArray = directions.split('');
    let acc = 0;
    let count = 0;
    const answer = dirArray.some((val) => {
        if (val === '(') {
            acc += 1;
        } else if (val === ')') {
            acc -= 1;
        }
        count++;
        return acc < 0;
    })
    console.log('Count:', count);    
    console.timeEnd('santa3');
});