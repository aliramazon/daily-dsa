/* 
Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either a 1 or a 0).
See if you can solve this in O(N) time and O(1) auxiliary space.

*/

const sortBitArrayV1 = (bits) => {
    let countZero = 0;

    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === 0) countZero++;
    }

    for (let i = 0; i < countZero; i++) {
        bits[i] = 0;
    }

    for (let i = countZero; i < bits.length; i++) {
        bits[i] = 1;
    }

    return bits;
};

// console.log(sortBitArrayV1([0, 0, 1, 1, 0, 1, 1, 0]));

/* 
    Input: [0,0,1,1,0,1,1,0]
    Output: [0,0,0,0,1,1,1,1]
*/
const sortBitArrayV2 = (bits) => {
    let left = 0;
    let right = bits.length - 1;

    while (left <= right) {
        if (bits[left] > bits[right]) {
            bits[left++] = 0;
            bits[right--] = 1;
        } else if (bits[left] === 1 && bits[right] === 1) {
            right--;
        } else {
            left++;
        }
    }

    return bits;
};

const sortBitArrayV3 = (bits) => {
    let left = 0;
    let right = bits.length - 1;

    while (left < right) {
        while (bits[right] === 1) {
            right--;
        }
        while (bits[left] === 0) {
            left++;
        }

        if (left < right) {
            [bits[left], bits[right]] = [bits[right], bits[left]];
        }
    }

    return bits;
};

console.log(sortBitArrayV3([0, 0, 1, 1, 0, 1, 1, 0]));
console.log(sortBitArrayV3([0, 1, 0, 1]));
console.log(sortBitArrayV3([1, 1, 0, 1]));
