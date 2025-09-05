/*
## Sorted and Rotated Array

Given an array with distinct values that is sorted and rotated, determine if a target value exists in the array.

A sorted array is rotated by taking an unknown number of values from the beginning and placing them at the end.

Examples of rotations:
- [3, 4, 5, 1, 2] is rotated left by 2.
- [99, 14, 25, 78, 93] is rotated right by 1.

Parameters:
- arr {Array}
- target {Integer}

Output:
- {Boolean}

Constraints:
- Time Complexity: O(log N)
- Space Complexity: O(1)

Examples:
[35, 46, 79, 102, 1, 14, 29, 31], 46 --> true
[35, 46, 79, 102, 1, 14, 29, 31], 47 --> false
[7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9 --> true
*/

const searchInRotatedArray = (numbers: number[], target: number) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (numbers[mid] === target) {
            return true;
        }

        if (numbers[left] <= numbers[mid]) {
            if (numbers[left] <= target && target < numbers[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (numbers[mid] < target && target <= numbers[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};

// Target exists
console.log(
    searchInRotatedArray([35, 46, 79, 102, 1, 14, 29, 31], 46) === true
);
console.log(searchInRotatedArray([35, 46, 79, 102, 1, 14, 29, 31], 1) === true);
console.log(searchInRotatedArray([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9) === true);
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0) === true);
console.log(searchInRotatedArray([30, 40, 50, 5, 10, 20], 10) === true);

// Target does not exist
console.log(
    searchInRotatedArray([35, 46, 79, 102, 1, 14, 29, 31], 47) === false
);
console.log(
    searchInRotatedArray([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 11) === false
);
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 3) === false);

// Edge cases
console.log(searchInRotatedArray([], 5) === false); // empty array
console.log(searchInRotatedArray([1], 1) === true); // single element, found
console.log(searchInRotatedArray([1], 2) === false); // single element, not found
console.log(searchInRotatedArray([1, 3], 3) === true); // two elements, rotated
console.log(searchInRotatedArray([3, 1], 3) === true); // two elements, rotated differently
console.log(searchInRotatedArray([3, 1], 2) === false); // two elements, target absent
