const twoSumInSortedArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] > target) {
            right--;
        } else if (arr[left] + arr[right] < target) {
            left++;
        } else if (arr[left] + arr[right] === target) {
            return [left, right];
        }
    }
    return false;
};

console.log(twoSumInSortedArray([0, 2, 4, 8, 9, 12, 16], 17));
