const fs = require("fs");

const num = Number(fs.readFileSync("dev/stdin").toString().split(" ")[0]);

function callResult(num) {
    if (num >= 90 && num <= 100) {
        console.log("A");
        return;
    }
    if (num >= 80 && num <= 89) {
        console.log("B");
        return;
    }
    if (num >= 70 && num <= 79) {
        console.log("C");
        return;
    }
    if (num >= 60 && num <= 69) {
        console.log("D");
        return;
    }
    console.log("F");
}

callResult(num);
