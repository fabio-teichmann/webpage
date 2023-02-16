var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
console.log(answer);
// TYPES
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm only ".concat(age, " years old");
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', ''];
// Object
var wizards = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size.Small;
var sizeName2 = Size[2];
// Any - RARE
var whatever = 'lala';
whatever = 5;
// void - common for functions
var sing = function () {
    console.log('lalalala');
};
// never - function NEVER returns / NEVER has unreachable code / NEVER returns true
// usually for errors
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('fight');
};
// export {}; // needed for modules!
