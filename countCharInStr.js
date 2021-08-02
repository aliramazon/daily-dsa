const countCharInStr = (str, char) => {
    const countChar = (count, i) => {
        if (i >= str.length) return count;
        return countChar(str[i] === char ? count + 1 : count, i + 1);
    };
    return countChar(0, 0);
};

console.log(countCharInStr("helloo", "h"));
console.log(countCharInStr("a", "b"));
