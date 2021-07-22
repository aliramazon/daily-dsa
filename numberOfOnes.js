/*
Number of Ones in a Sorted Bit Array
Given a sorted bit array (values of either 0 or 1), determine the number of 1’s in the array.

Perform this in O(log(N)) time complexity.

Input: [0,0,0,1,1,1,1,1,1,1,1]

Output: 8
*/

const numberOfOnes = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = 0;
    let length = arr.length;

    if (arr[0]) return length;
    if (arr[length - 1] === 0) return 0;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === 1 && arr[mid - 1] === 0) {
            return length - mid;
        }

        if (arr[mid] === 0) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};

console.log(numberOfOnes([0]));
console.log(numberOfOnes([0, 0]));
console.log(numberOfOnes([1, 1, 1]));
console.log(numberOfOnes([0, 0, 1, 1, 1]));
console.log(numberOfOnes([1, 1, 1]));
