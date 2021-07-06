/* Challenge 1 */
/* 
    Given cordinates. Array of [x, y]  and
    Origin cordinate [x, y] and K
    Find K closest one to Origin cordinate

    Example:
    Cordinates: [[1, 2], [-2, -2], [3,  4], [0,  5]]
    Origin: [1, 0]
    K: 2

    Output: [[1, 2], [-2, -2]]
*/

/* Challenge 2 */

/* 
Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:
Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

Example 4:
Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"
 

Constraints:

1 <= s.length <= 10^5
s[i] is one of  '(' , ')' and lowercase English letters.
*/

var minRemoveToMakeValid = function (s) {
    if (s.length === 0) return "";
    let stack = [];
    let notValidIndexes = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === "(") {
            stack.push("(");
            notValidIndexes.push(i);
        } else if (char === ")") {
            if (stack[stack.length - 1] === "(") {
                stack.pop();
                notValidIndexes.pop();
            } else {
                stack.push(char);
                notValidIndexes.push(i);
            }
        }
    }

    let chars = s.split("");

    for (let idx of notValidIndexes) {
        chars[idx] = "";
    }

    return chars.join("");
};

console.log(minRemoveToMakeValid("(991)(("));
console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid(")a("));
console.log(minRemoveToMakeValid("()())()((aa("));
console.log(minRemoveToMakeValid(")"));
console.log(minRemoveToMakeValid("("));
