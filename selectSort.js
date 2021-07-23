const selectSort = (arr) => {
    let min;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
};

console.log(selectSort([0, 2, -2, -4, 12, 6, 10, 122]));
console.log(selectSort([0, 0, 0, 1]));
