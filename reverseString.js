// a b c d e f
const reverseString = (str) => {
    let chars = str.split("");
    let lastIndex = chars.length - 1;
    let mid = Math.floor(str.length / 2);

    for (let i = 0; i < mid; i++) {
        [chars[i], chars[lastIndex - i]] = [chars[lastIndex - i], chars[i]];
    }

    return chars.join("");
};

console.log(reverseString("A"));
console.log(reverseString("ab"));
console.log(reverseString("abc"));
console.log(reverseString("abcd"));
console.log(reverseString("abcde"));
console.log("----------------------");

const reverseStringRecursive = (str) => {
    if (str.length === 1) return str;
    return reverseStringRecursive(str.slice(1)) + str[0];
};

console.log(reverseStringRecursive("A"));
console.log(reverseStringRecursive("ab"));
console.log(reverseStringRecursive("abc"));
console.log(reverseStringRecursive("abcd"));
console.log(reverseStringRecursive("abcde"));
