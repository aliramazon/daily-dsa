/* 0, 1, 1, 2, 3, 5, 8, 13 */

const generateNFibonacci = (n) => {
    let fibs = [0, 1];

    while (fibs.length < n) {
        let nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
        fibs.push(nextFib);
    }
    return fibs;
};

// R = Recursion, B = Bottom, U = Up

const generateNFibonacciRBU = (n) => {
    let fibs = [0, 1];

    let searchFib = (i) => {
        if (i === n) return;
        fibs[i] = fibs[i - 1] + fibs[i - 2];
        searchFib(i + 1);
    };
    searchFib(2);
    return fibs;
};

const generateNthFibonacci = (n) => {
    let a = 0,
        b = 1,
        count = 2;

    while (count < n) {
        [a, b] = [b, a + b];
        count++;
    }

    return b;
};

const generateNthFibonacciRBU = (n) => {
    let a = 0,
        b = 1;

    const calcFib = (i) => {
        if (i >= n) return;
        [a, b] = [b, a + b];
        calcFib(i + 1);
    };
    calcFib(2);

    return b;
};

// R = Recursion, T = Top, D = Down, HM = HelperMethod
const generateNthFibonacciRTD = (n) => {
    if (n < 2) return n;
    return generateNthFibonacciRTD(n - 1) + generateNthFibonacciRTD(n - 2);
};

const generateNthFibonacciHmRTD = (n) => {
    const calcFib = (i) => {
        if (i < 2) return i;
        return calcFib(i - 1) + calcFib(i - 2);
    };

    return calcFib(n - 1);
};

const generateNthFibonacciHmRTDMemo = (n) => {
    let memo = new Map();

    let calcFib = (i) => {
        if (i < 2) return i;
        if (memo.has(i)) {
            return memo.get(i);
        } else {
            let fib = calcFib(i - 1) + calcFib(i - 2);
            memo.set(i, fib);
            return memo.get(i);
        }
    };

    return calcFib(n - 1);
};
