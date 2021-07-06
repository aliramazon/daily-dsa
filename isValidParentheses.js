const isValidParentheses = (string) => {
    let stack = [];

    for(let char of string) {
        if(char === "(") {
            stack.push(char);
        } else if(char === ")"){
            // let lastOpem = stack.pop();
            // if(lastOpen !== "(") return false;
            if(!stack.pop()) return false
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses("(("));
console.log(isValidParentheses("(1)2"));
console.log(isValidParentheses("((1))()"));
console.log(isValidParentheses("())("));

