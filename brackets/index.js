function isValidParentheses(string) {
    string = string.replaceAll(" ", '');
    const stack = [];
    for (let i = 0; i < string.length; i++) {
        // не лишай консолі в коді
        console.log(stack, string[i]);
        if (string[i] === "(") {
            stack.push("(")
        } else {
            // використовуй !== замість != задля уникнення помилок
            if (stack.length != 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length
}

