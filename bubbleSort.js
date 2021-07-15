const bubbleSortAsc = (arr) => {
    let shouldSort = true;
    let lastUnsorted = arr.length - 1;

    while (shouldSort) {
        shouldSort = false;

        for (let i = 0; i < lastUnsorted; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                shouldSort = true;
            }
        }
        lastUnsorted--;
    }

    return arr;
};

console.log(bubbleSortAsc([12, 9, 0, 1, 45, -1, -100, 1]));
console.log(bubbleSortAsc([0, 2, 1]));

const bubbleSortDesc = (arr) => {
    let shouldSort = true;
    let lastUnsorted = arr.length - 1;

    while (shouldSort) {
        shouldSort = false;

        for (let i = 0; i < lastUnsorted; i++) {
            if (arr[i] < arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                shouldSort = true;
            }
        }
        lastUnsorted--;
    }

    return arr;
};

console.log(bubbleSortDesc([12, 9, 0, 1, 45, -1, -100, 1]));
console.log(bubbleSortDesc([0, 2, 1]));
