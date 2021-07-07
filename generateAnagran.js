const generateAnagrams = (str) => {
    if (str.length === 1) return [str];
    let anagrams = [];

    let prevAnagrams = generateAnagrams(str.slice(1));

    for (let prevAnagram of prevAnagrams) {
        for (let i = 0; i < str.length; i++) {
            let chars = prevAnagram.split("");
            chars.splice(i, 0, str[0]);
            anagrams.push(chars.join(""));
        }
    }
    return anagrams;
};

console.log(generateAnagrams("abc"));
