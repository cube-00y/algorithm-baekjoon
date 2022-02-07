const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().split("\n");

const [inputA, inputB] = input.map(Number);

function callResult(a, b) {
    const [line3, line2, line1] = b.toString().split("").map(Number).map(v => v * a);

    console.log(line1);
    console.log(line2);
    console.log(line3);
    console.log(a * b);
}

callResult(inputA, inputB);
