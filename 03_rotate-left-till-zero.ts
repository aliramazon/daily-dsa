/* Create a function that takes an integer array containing one 0 and rotates the array counterclockwise so that the 0 ends up at the front of the array.

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
*/

type Numbers = number[];

/*  
Time Complexity:
    Each shift() is O(N) in JS, because all elements must be reindexed.
    In the worst case, zero is at the end and you may do up to n shifts
*/

const rotateLeftTillZeroV1 = (nums: Numbers): Numbers => {
    if (nums.length === 0) return nums;
    while (nums[0] !== 0) {
        const shiftedElement = nums.shift();
        if (shiftedElement) {
            nums.push(shiftedElement);
        }
    }

    return nums;
};

/* Uses an extra array to achieve O(n) time complexity */

const rotateLeftTillZeroV2 = (nums: Numbers): Numbers => {
    const length = nums.length;
    let offset = 0;
    let copy = new Array(length);

    if (nums[offset] === 0) {
        return nums;
    }

    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            offset = i;
        }
        copy[i] = nums[i];
    }

    for (let j = 0; j < length; j++) {
        const newPos = (j - offset + length) % length;

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
