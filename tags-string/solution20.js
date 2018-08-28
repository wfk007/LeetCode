//Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [],
        arr = s.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
            stack.push(arr[i])
        } else if (arr[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
        } else if (arr[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop()
        } else if (arr[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop()
        } else {
            return false
        }
    }
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
};
console.log(isValid("{[]}"))
