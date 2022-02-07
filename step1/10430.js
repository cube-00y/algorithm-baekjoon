const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().split(" ");

const value = input.map(Number);

function callResult(a, b, c) {
    console.log((a + b) % c);
    console.log(((a % c) + (b % c)) % c);
    console.log((a * b) % c);
    console.log(((a % c) * (b % c)) % c);
}

callResult(...value);
