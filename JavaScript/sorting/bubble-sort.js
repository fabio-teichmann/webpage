const toSort = [8,1,3,4,2,6,4,7]

const bubbleSort = (array) => {
    let steps = array.length;
    for (let i = 0; i < array.length; i ++) {
        console.log(array)
        for (let j = 0; j < steps; j++) {
            let lhs = array[j];
            let rhs = array[j+1];
            if (lhs > rhs) {
                array[j] = rhs;
                array[j+1] = lhs;
            }
        }
        steps--;
    }
}

bubbleSort(toSort);