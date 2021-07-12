/* Frequent Counting */

const sortBitArray1 = (bits) => {
    let zeroCount = 0;

    for (let bit of bits) {
        if (bit === 0) zeroCount++;
    }

    for (let i = 0; i < bits.length; i++) {
        if (zeroCount > i) {
            if (bits[i] !== 0) {
                bits[i] = 0;
            }
        } else if (bits[i] !== 1) {
            bits[i] = 1;
        }
    }

    return bits;
};

/* Two Pointers */

const sortBitArray2 = (bits) => {
    let right = bits.length - 1;
    let left = 0;

    while (left < right) {
        while (bits[left] === 0) {
            left++;
        }
        while (bits[right] === 1) {
            right--;
        }
        if (left < right) {
            [bits[left], bits[right]] = [bits[right], bits[left]];
            left++;
            right--;
        }
    }

    return bits;
};

const sortBitArray = (bits) => {
    let splitter = 0;

    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === 0) {
            [bits[splitter], bits[i]] = [bits[i], bits[splitter]];
            splitter++;
        }
    }
    return bits;
};

console.log(sortBitArray([1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]));
console.log(sortBitArray([0, 0, 0]));
console.log(sortBitArray([0, 1, 0]));
console.log(sortBitArray([0, 0, 0, 0, 1, 1, 1, 1, 1]));
