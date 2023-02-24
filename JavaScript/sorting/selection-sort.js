const toSort = [8,1,3,4,2,6,4,7]

const selectionSort = (array) => {
    let steps = array.length;
    let start = 0;
    // let min = array[0];
    // let idx = 0;
    for (let i = 0; i < array.length; i ++) {
        let min = array[start];
        let idx = start;
        console.log(i, start, array);
        for (let j = start; j < steps; j ++) {
            if (array[j] < min) {
                min = array[j];
                idx = j;
            }
        }
        temp = array[i];
        array[i] = min;
        array[idx] = temp;
        start++;
        steps--;
    }
}

selectionSort(toSort);