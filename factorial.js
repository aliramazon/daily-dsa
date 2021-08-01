// Top Down approach

const factorialTDR = (n) => {
    if (n <= 1) return 1;

    return n * factorialTDR(n - 1);
};
console.log(factorialTDR(5));

// Bottom up

const factorialBUR = (n) => {
    const calculateFactorial = (product, i) => {
        if (i > n) return product;
        return calculateFactorial(product * i, i + 1);
    };
    return calculateFactorial(1, 1);
};

console.log(factorialBUR(5));
