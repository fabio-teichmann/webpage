import fs from 'fs';

// read wrapping.txt
// convert to array -- split by 'x'
// extract 3 numbers
// calc 3 surfaces
// calc slack (isolate max)

const calcSide = (a, b) => {
    return 2 * a * b;
}

const calcSlack = (a, b, c) => {
    const max = Math.max(a, b, c);
    return a * b * c / max;
}

const calcSurface = (a, b, c) => {
    const first = calcSide(a, b);
    const second = calcSide(b, c);
    const third = calcSide(c, a);

    return first + second + third;
}

const calcWrappingNeeds = (a, b, c) => {
    const wrapping = calcSurface(a, b, c);
    const slack = calcSlack(a, b, c);

    return wrapping + slack;
}

const getTotalWrapping = () => {
    fs.readFile('./wrapping.txt', (err, data) => {
        if (err) {
            throw err;
        }
        const wrappings = data.toString();
        let totalWrapping = 0;
        // console.log(wrappings);

        for (const w of wrappings.split('\n')) {
            // console.log(w.split('x'));
            const [a, b, c] = w.split('x');
            // console.log(w, a, b, c);
            totalWrapping += calcWrappingNeeds(a, b, c)
            
        }
        console.log(totalWrapping);
        
    })
}

getTotalWrapping();

const calcRibbon = (a, b, c) => {
    const max = Math.max(a, b, c);
    // console.log('max:', max);
    // console.log(a, b, c)
    // console.log()
    return 2 * (Number(a) + Number(b) + Number(c) - max);
}

const calcBow = (a, b, c) => {
    return a * b * c;
}

const calcRibbonNeeds = (a, b, c) => {
    const ribbon = calcRibbon(a, b, c);
    const bow = calcBow(a, b, c);
    // console.log(ribbon, bow);
    return ribbon + bow;
}

const calcTotalRibbon = () => {
    fs.readFile('./wrapping.txt', (err, data) => {
        if (err) {
            throw err;
        }
        const wrappings = data.toString();
        let totalRibbon = 0;

        for (const w of wrappings.split('\n')) {
            const [a, b, c] = w.split('x');
            // console.log(a,b,c);
            
            totalRibbon += calcRibbonNeeds(a, b, c);
            // break;
        }
        console.log("total ribbon:", totalRibbon);
    })
}

calcTotalRibbon();