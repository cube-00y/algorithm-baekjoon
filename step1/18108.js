const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().split("\n")[0];

console.log(Number(input) - 543);
