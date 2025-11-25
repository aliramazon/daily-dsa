/* 
Move all zeros to the end of an array while maintaining the order of the other elements. Given an array of integers, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Constraints
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

Examples:

input:  [0, 1, 0, 3, 12]
output: [1, 3, 12, 0, 0]

input:  [1, 2, 0, 4, 3, 0, 5, 0]
output: [1, 2, 4, 3, 5, 0, 0, 0]

input:  [1]
output: [1]

input:  [0, 0, 1]
output: [1, 0, 0]
*/

const moveZerosToEnd = (numbers: number[]): number[] => {
    let insertPos = 0;
    numbers.forEach((element) => {
        if (element !== 0) {
            numbers[insertPos] = element;
            insertPos++;
        }
    });

    while (insertPos < numbers.length) {
        numbers[insertPos] = 0;
        insertPos++;
    }

    return numbers;
};

// Test cases
console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // Expected: [1, 3, 12, 0, 0]
console.log(moveZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0])); // Expected: [1, 2, 4, 3, 5, 0, 0, 0]
console.log(moveZerosToEnd([1])); // Expected: [1]
console.log(moveZerosToEnd([0, 0, 1])); // Expected: [1, 0, 0]
console.log(moveZerosToEnd([0, 0, 0])); // Expected: [0, 0, 0]
console.log(moveZerosToEnd([1, 2, 3])); // Expected: [1, 2, 3]
console.log(moveZerosToEnd([0])); // Expected: [0]
console.log(moveZerosToEnd([])); // Expected: []
