// a = 97 

function grid(size) {
    const res = []
    for (let i = 0; i < size; i++) {
        res[i] = [];
        for (let j = 0; j < size; j++) {
            res[i][j] = String.fromCharCode(97 + i + j);
        }

    }
    return size < 0 ? null : res
}
// console.log(grid(5));
// console.log(grid(6));
// console.log(grid(-3));
// console.log(grid(2));
// console.log(grid(3.5));

// Спробуй виконати grid(14) і зрозумій в чому помилка
