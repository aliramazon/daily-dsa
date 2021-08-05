// Input: "abcde", Output: ["a", "ab", "abc", "abcd", "abcde"]
const increasingSubstrings = (str) => {
    let subs = [];

    const cut = (i) => {
        if (i === str.length + 1) return;
        subs.push(str.slice(0, i));
        cut(i + 1);
    };
    cut(1);

    return subs;
};

console.log(increasingSubstrings("abcd"));

// Input: "abcd", Output: ["abcd", "bcd", "cd", d]
const decreasingSubstrings = (str) => {
    let subs = [];

    const cut = (i) => {
        if (i === str.length) return;
        subs.push(str.slice(i));
        cut(i + 1);
    };
    cut(0);

    return subs;
};

console.log(decreasingSubstrings("abcde"));
