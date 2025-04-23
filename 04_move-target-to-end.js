/* 
    Examples: 
    
    Input: [1, 8, 4, 11, 67, 8, 900, 12, 8, 13], 8
    Output: [1, 4, 11, 67, 900, 12, 13, 8, 8, 8]
*/

const moveTargetToEnd = (nums, target) => {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
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
