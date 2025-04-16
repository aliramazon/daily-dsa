/* Create a function that takes an integer array containing one 0 and rotates the array counterclockwise so that the 0 ends up at the front of the array. */
/* 
    Examples:

    Input:  [0,1,2,3]
    Output: [0,1,2,3]
    ---
    Input:  [1,0,2,3]
    Output: [0,2,3,1]
    ---
    Input:  [1,0,2,3,4,5,6]
    Output: [0,2,3,4,5,6,1]
    ---
    Input:  [1,8,2,3,4,0,7]
    Output: [0,7,1,8,2,3,4]
    ---
    Input:  [1,8,2,3,0,5,6]
    Output: [0,5,6,1,8,2,3]
    ---
    Input:  [1,8,2,3,4,5,0]
    Output: [0,1,8,2,3,4,5]
---

*/

/* 
    Time Complexity:
        Each shift() is O(N) in JS, because all elements must be reindexed.
        In the worst case, zero is at the end and you may do up to n shifts
*/

const rotateLeftTillZeroV1 = (nums) => {
    while (nums[0] !== 0) {
        nums.push(nums.shift());
    }

    return nums;
};

/* Uses an extra array to achieve O(n) time complexity */

const rotateLeftTillZeroV2 = (nums) => {
    let firstZeroPos = 0;
    let copy = new Array(nums.length);

    if (nums[firstZeroPos] === 0) {
        return nums;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            firstZeroPos = i;
        }
        copy[i] = nums[i];
    }

    for (let j = 0; j < nums.length; j++) {
        let offset = j - firstZeroPos;
        const newPos = (offset + nums.length) % nums.length;
        nums[newPos] = copy[j];
    }

    return nums;
};

console.log(rotateLeftTillZeroV2([1, 0, 2, 3]));
console.log(rotateLeftTillZeroV2([0, 1, 2, 3]));
console.log(rotateLeftTillZeroV2([1, 0, 2, 3, 4, 5, 6]));
console.log(rotateLeftTillZeroV2([1, 8, 2, 3, 4, 0, 7]));
console.log(rotateLeftTillZeroV2([1, 8, 2, 3, 0, 5, 6]));
console.log(rotateLeftTillZeroV2([1, 8, 2, 3, 4, 5, 0]));
