const isValidBrackets = (string) => {
    let stack = [];
    let openingBrackets = ["(", "{", "["];
    let dic = { ")": "(", "}": "{", "]": "[" };

    for (let char of string) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else {
            let lastOpened = stack.pop();
            if (lastOpened !== dic[char]) return false;
        }
    }
    return stack.length === 0;
};

console.log(isValidBrackets("(()]"));
console.log(isValidBrackets("(())"));
console.log(isValidBrackets("{()[]}"));
console.log(isValidBrackets("{()["));
