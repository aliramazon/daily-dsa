const arraySum = (arr) => {
    const sumUp = (total, i) => {
        if (i >= arr.length) return total;
        return sumUp(total + arr[i], i + 1);
    };

    return sumUp(0, 0);
};

const arraySum1 = (arr) => {
    if (arr.length === 1) return arr[0];
    return arr[0] + arraySum(arr.slice(1));
};

console.log(arraySum([1, 2, 3, 4, 5]));
console.log(arraySum1([1, 2, 3, 4, 5]));
