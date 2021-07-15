const binarySearch = (arr, target) => {
    let mid;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        }
    }
    return "not found";
};

console.log(
    binarySearch([0, 1, 3, 4, 5, 6, 8, 19, 23, 23.1, 45, 46, 90, 102, 199], 199)
);

console.log(
    binarySearch([0, 1, 3, 4, 5, 6, 8, 19, 23, 23.1, 45, 46, 90, 102, 199], 0)
);

console.log(
    binarySearch([0, 1, 3, 4, 5, 6, 8, 19, 23, 23.1, 45, 46, 90, 102, 199], 19)
);

console.log(binarySearch([1, 100], 100));
