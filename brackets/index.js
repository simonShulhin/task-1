function isValidParentheses(string) {
    string = string.replaceAll(" ", '');
    const stack = [];
    for (let i = 0; i < string.length; i++) {
        console.log(stack, string[i]);
        if (string[i] === "(") {
            stack.push("(")
        } else {
            if (stack.length != 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length
}

