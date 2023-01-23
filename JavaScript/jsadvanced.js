// Advanced arrays
const array = [1, 2, 3, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log("forEach:", double)

// map
const mapArray = array.map((num) => {
    return num * 2
})
console.log("map:", mapArray)

// filter
const filterArray = array.filter(num => {
    return num > 5
})

console.log("filter:", filterArray)

// reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0)

console.log("reduce:", reduceArray)


// ADVANCED LOOPS

const basket = ['apples', 'oranges', 'grapes'];
const detailesBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for ( let i =0; i < basket.length; i++) {
    console.log(basket[i]);
}

basket.forEach(item => {
    console.log(item);
})

// for of (ITERATING)
for (item of basket) {
    console.log(item);
}

// for in (ENUMERATING)
// works for arrays, but returnes indices
for (item in detailesBasket) {
    console.log(item);
}

// DEBUGGING
const flettened = [[0,1], [2,3], [4,5]].reduce((accumulator, array) => {
    console.log('array', array);
    console.log('accumulator', accumulator);
    return accumulator.concat(array);
}, []);

// with debugger
const flettened2 = [[0,1], [2,3], [4,5]].reduce((accumulator, array) => {
    debugger; // exec stops here
    return accumulator.concat(array);
}, []);

