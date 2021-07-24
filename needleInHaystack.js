const needleInHaystack = (needle, haystack) => {
    let isNeedleFound;

    for (let i = 0; i < haystack.length; i++) {
        isNeedleFound = false;
        if (haystack[i] === needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (needle[j] === haystack[i + j]) {
                    isNeedleFound = true;
                } else {
                    break;
                }
            }
            if (isNeedleFound) return isNeedleFound;
        }
    }
    return isNeedleFound;
};

console.log(needleInHaystack("hello", "hellellohelle"));
