// fs 사용 할 경우 채점 중 런타임 에러 발생
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function callResult(x, y) {
    if (x > 0) {
        if (y > 0) {
            console.log(1);
            return;
        }

        console.log(4);
        return;
    }

    if (y > 0) {
        console.log(2);
        return;
    }

    console.log(3);
}

let input = [];

rl.on('line', function (line) {
    input.push(line)
})
.on('close', function () {
    const [x, y] = input.map(Number);
    callResult(x, y);
    process.exit();
});

