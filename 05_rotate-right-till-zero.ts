/* 
    Create a function that takes an integer array containing exactly one 0, 
    and rotates the array to the right until the 0 is at the **end** of the array.

    Examples:

    Input:  [0,1,2,3]
    Output: [1,2,3,0]
    ---
    Input:  [1,0,2,3]
    Output: [2,3,1,0]
    ---
    Input:  [1,0,2,3,4,5,6]
    Output: [2,3,4,5,6,1,0]
    ---
    Input:  [1,8,2,3,4,0,7]
    Output: [7,1,8,2,3,4,0]
    ---
    Input:  [1,8,2,3,0,5,6]
    Output: [5,6,1,8,2,3,0]
    ---
    Input:  [1,8,2,3,4,5,0]
    Output: [1,8,2,3,4,5,0]
---
*/

const rotateRightUntilEnd = (nums: number[]): number[] => {
    const length = nums.length;
    if (nums[length - 1] === 0) return nums;
    const copy = new Array(length);

    let zeroPos = 0;

    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            zeroPos = i;
        }
        copy[i] = nums[i];
    }

    let offset = length - 1 - zeroPos;

    for (let i = 0; i < copy.length; i++) {
        const originalVal = copy[i];
        const futureIdx = (offset + i) % length;
        nums[futureIdx] = originalVal;
    }

    return nums;
};

console.log(rotateRightUntilEnd([0, 1, 2, 3])); // [1,2,3,0]
console.log(rotateRightUntilEnd([1, 0, 2, 3])); // [2,3,1,0]
console.log(rotateRightUntilEnd([1, 0, 2, 3, 4, 5, 6])); // [2,3,4,5,6,1,0]
console.log(rotateRightUntilEnd([1, 8, 2, 3, 4, 0, 7])); // [7,1,8,2,3,4,0]
console.log(rotateRightUntilEnd([1, 8, 2, 3, 0, 5, 6])); // [5,6,1,8,2,3,0]
console.log(rotateRightUntilEnd([1, 8, 2, 3, 4, 5, 0])); // [1,8,2,3,4,5,0]
