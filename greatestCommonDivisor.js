const greatestCommonDivisor = (num1, num2) => {
    if (num1 < 0) num1 *= -1;
    if (num2 < 0) num2 *= -1;

    while (num2 > 0) {
        [num1, num2] = [num2, num1 % num2];
    }

    return num1;
};

console.log(greatestCommonDivisor(13, 26));

const greatestCommonDivisor1 = (num1, num2) => {
    if (num1 < 0) num1 *= -1;
    if (num2 < 0) num2 *= -1;
    if (num2 === 0) return num1;

    return greatestCommonDivisor1(num2, num1 % num2);
};

console.log(greatestCommonDivisor1(18, 99));
console.log(greatestCommonDivisor1(0, 18));
