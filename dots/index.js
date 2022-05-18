function calculate(string) {

    function reducer(number1, number2, del) {
        switch (del) {
            case "+":
                return number1 + number2;
            case "-":
                return number1 >= number2 ? number1 - number2 : 0;
            case "*":
                return number1 * number2;
            case "/":
                return parseInt(number1 / number2);
            default:
                return 0;
        }
    }
    // видалимо зайві пробіли
    let res = string.replaceAll(" ", "").replaceAll("//", '/');
    // визначимося зі знаком, який ділить строку
    const del = res.includes('+') ? '+' : res.includes('-') ? '-' : res.includes('*') ? '*' : '/';
    const arr = res.split(del);
    return Array(reducer(arr[0].length, arr[1].length, del)).fill('.').join('');
}



