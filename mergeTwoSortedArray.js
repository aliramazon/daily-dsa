const mergeTwoSortedArrays = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let mergedArr = [];
    let totalElements = arr1.length + arr2.length;

    while (mergedArr.length < totalElements) {
        if (arr1[i] > arr2[j] || i === arr1.length) {
            mergedArr.push(arr2[j]);
            j++;
        } else if (arr1[i] < arr2[j] || j === arr2.length) {
            mergedArr.push(arr1[i]);
            i++;
        } else if (arr1[i] === arr2[j]) {
            mergedArr.push(arr1[i], arr2[j]);
            i++;
            j++;
        }
    }
    return mergedArr;
};

console.log(mergeTwoSortedArrays([1, 10, 17, 19, 89], [3, 8, 8, 100, 101]));
console.log(
    mergeTwoSortedArrays([1, 10, 14, 19, 120, 121, 122, 123], [1, 7, 8, 18])
);
