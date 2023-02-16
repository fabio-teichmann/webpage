const sum = (a : number, b : number) => {
    return a + b;
};

const answer = sum(4, 5);

console.log(answer);

// TYPES
// boolean
let isCool: boolean= true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm only ${age} years old`

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', ''];

// Object
let wizards: object = {
    a: 'John'
}

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5]

// Enum
enum Size { Small = 1, Medium = 2, Large = 3};
let sizeName: number = Size.Small;
let sizeName2: string = Size[2];

// Any - RARE
let whatever: any = 'lala';
whatever = 5;

// void - common for functions
let sing = (): void => {
    console.log('lalalala');
}

// never - function NEVER returns / NEVER has unreachable code / NEVER returns true
// usually for errors
let error = (): never => {
    throw Error('oops');
}

// interface - ensures that certain objects have certain types
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('fight');
}

// type assertions
interface CatArmy {
    count: number,
    type: string,
    magic?: string // OPTIONAL parameter
}

let dog = {} as CatArmy;
dog.count;

// function
let fightRobotArmy2 = (robots: RobotArmy): number => {
    console.log('fight');
    return 5;
}

// class
class Animal {
    private sing: string; // default is public
    constructor(sound:string) {
        this.sing = sound;
    }

    greet() {
        return `Hello ${this.sing}`;
    }
}

let lion = new Animal('RAAWR');
// lion.sing; --> won't work!

// Union
let confused: string | number = 'hello';

// export {}; // needed for modules!