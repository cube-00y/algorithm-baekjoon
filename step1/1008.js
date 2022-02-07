const fs = require("fs");

const input = fs.readFileSync("a.txt").toString().split(" ");

const value = input.map(Number);

function callResult(a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(Math.floor(a / b));
    console.log(a % b);
}

callResult(...value);
