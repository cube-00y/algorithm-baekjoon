const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().split(" ");

const result = input.map(Number).reduce((p, c) => {
    return p - c;
});

console.log(result);
