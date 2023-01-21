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