const fs = require("fs");

const input = fs.readFileSync("a.txt").toString().split("\n")[0];

function callResult(value) {
    if (value.length > 50) {
        throw new Error("최대 길이 초과");
    }
    const testRegex = /^[a-z]+$/;

    if (!testRegex.test(value)) {
        throw new Error("알파벳 소문자만 입력 가능");
    }

    console.log(`${value}??!`);
}

callResult(input);
