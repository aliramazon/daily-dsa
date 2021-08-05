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
