const fs = require("fs");

const input = Number(fs.readFileSync("dev/stdin").toString().split(" ")[0]);

function callResult (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(1);
        return;
    }

    console.log(0);
}

callResult(input);
