const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().split(" ");

const num = input.map(Number);

function callResult(num1, num2) {
    if (num1 > num2) {
        console.log(">");
        return;
    }
    if (num1 < num2) {
        console.log("<");
        return;
    }
    if (num1 === num2) {
        console.log("==");
        return;
    }
}

callResult(...num);
