/* 
Move all instances of a target value to the end of an array while maintaining the order of the other elements. Given an array of integers and a target value, write a function to move all instances of the target to the end of it while maintaining the relative order of the non-target elements.

Constraints
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

Examples:

Input: [1, 8, 4, 11, 67, 8, 900, 12, 8, 13], 8
Output: [1, 4, 11, 67, 900, 12, 13, 8, 8, 8]

Input: [2, 1, 2, 2, 2, 3, 4, 2], 2
Output: [1, 3, 4, 2, 2, 2, 2, 2]

Input: [1, 2, 3], 4
Output: [1, 2, 3]

Input: [5, 5, 5], 5
Output: [5, 5, 5]
*/

type Numbers = number[];

const moveTargetToEnd = (nums: Numbers, target: number): Numbers => {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    while (insertPos < nums.length) {
        nums[insertPos] = target;
        insertPos++;
    }

    return nums;
};

console.log(moveTargetToEnd([1, 8, 4, 11, 67, 8, 900, 12, 8, 13], 8));
