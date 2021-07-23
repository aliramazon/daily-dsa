const insertionSort = (arr) => {
    let tempValue;
    let prevPos;
    for (let i = 1; i < arr.length; i++) {
        let tempValue = arr[i];
        for (let j = i - 1; j >= -1; j--) {
            prevPos = j;
            if (arr[prevPos] > tempValue) {
                arr[prevPos + 1] = arr[prevPos];
            } else {
                arr[prevPos + 1] = tempValue;
                break;
            }
        }
    }

    return arr;
};

console.log(insertionSort([1, 4, 8, 6, 7, 8, 9, 7, -12, -14, -16]));
console.log(insertionSort([100, 1, 7, 8, 2, -14]));
console.log(insertionSort([1, 0, 0, 0, 0]));
console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([0, 1]));
console.log(insertionSort([2, 1, 3, 4, 5, 6]));
