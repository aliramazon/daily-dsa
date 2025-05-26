/* Given two sorted array containing  numbers. Merge them into an array */

const mergeTwoSortedArrays = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    const length = arr1.length + arr2.length;
    const result = [];

    while (i + j < length) {
        const value1 = arr1[i];
        const value2 = arr2[j];
        if (value1 >= value2 || i === arr1.length) {
            result.push(value2);
            j++;
        } else if (value1 <= value2 || j === arr2.length) {
            result.push(value1);
            i++;
        }
    }
    return result;
};

console.log(mergeTwoSortedArrays([1, 10, 17, 19, 89], [3, 8, 8, 100, 101]));
console.log(
    mergeTwoSortedArrays([1, 10, 14, 19, 120, 121, 122, 123], [1, 7, 8, 18])
);
console.log(mergeTwoSortedArrays([1], []));
console.log(mergeTwoSortedArrays([], [1, 2, 3]));
