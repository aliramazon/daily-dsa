// A fox can jum 1, 2, 3 steps at a time. How many distinctive ways a fox can take to climb the stairs.

const climbStairs = (n) => {
    if (n < 0) return 0;
    if (n <= 2) return n;
    if (n === 3) return 4;
    return climbStairs(n - 1) + climbStairs(n - 2) + climbStairs(n - 3);
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(10));

const climbStairsMemo = (n) => {
    let hash = {};

    const go = (n) => {
        if (hash[n]) return hash[n];
        if (n < 0) return 0;
        if (n <= 2) return n;
        if (n === 3) return 4;
        hash[n] = go(n - 1) + go(n - 2) + go(n - 3);

        return hash[n];
    };

    return go(n);
};

console.log(climbStairsMemo(1));
console.log(climbStairsMemo(2));
console.log(climbStairsMemo(3));
console.log(climbStairsMemo(4));
console.log(climbStairsMemo(1001));
